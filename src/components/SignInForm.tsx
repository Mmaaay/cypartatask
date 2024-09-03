"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { FC, useState } from "react"; // Import useState
import { useForm } from "react-hook-form";
import { signInSchema, signInType } from "../lib/validators/sign-in";
import { PasswordInput } from "./ui/password-input";
import { signIn } from "@/lib/signIn";

interface SignInFormProps {}

const SignInForm: FC<SignInFormProps> = ({}) => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const signInForm = useForm<signInType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { errors } = signInForm.formState;

  const { mutate: SignInMutation, isPending } = useMutation({
    mutationFn: async ({ email, password }: signInType) => {
      const payload: signInType = { email, password };
      await signIn(payload);
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err.response?.status === 401) {
          setErrorMessage("Invalid email or password");
        } else {
          toast({
            title: "An error occurred",
            variant: "destructive",
            description: "An error occurred, please try again later",
          });
        }
      }
    },
    onSuccess: (data) => {
      toast({
        title: "Login Successful",
        variant: "success",
        description: "You have successfully logged in",
      });
      router.push("/");
    },
  });

  return (
    <div className="">
      <Form {...signInForm}>
        <form
          className="w-full flex flex-col items-center justify-center px-10 py-14 rounded-lg"
          onSubmit={signInForm.handleSubmit((e) => {
            SignInMutation(e);
          })}
        >
          {/* Display error message if there is one */}
          {errorMessage && (
            <div className="mb-4 text-red-600 font-bold">{errorMessage}</div>
          )}

          <FormField
            control={signInForm.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-7 w-full">
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    className="placeholder-opacity-35 px-4 py-6 rounded-lg"
                    placeholder="nouran@cyparta.com"
                    {...field}
                  />
                </FormControl>
                {errors.email && (
                  <FormMessage>{errors.email.message} </FormMessage>
                )}
              </FormItem>
            )}
          />
          <FormField
            control={signInForm.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mb-14 w-full">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder="Your Password"
                    className="placeholder-opacity-35 px-4 py-6 rounded-lg"
                    {...field}
                  />
                </FormControl>
                {errors.password && (
                  <FormMessage>{errors.password.message} </FormMessage>
                )}
              </FormItem>
            )}
          />
          <Button
            className="w-3/4 p-6 font-bold rounded-xl text-lg"
            type="submit"
            disabled={isPending}
          >
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SignInForm;

"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FC, useEffect, useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormField,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useModal } from "@/lib/store/ModalStore";
import { UserProfileData } from "../../lib/types/userDataTypes";
import {
  userProfileEditSchema,
  UserProfileEditValidator,
} from "@/lib/validators/userProfilevalidator";

interface CustomizeServerDialogProps {
  isOpen: boolean;
  handleClose: () => void;
  isLoading: boolean;
  form: any;
  onSubmit: any;
  user: UserProfileData;
}
{
  /* using the modalstore, you can edit mulgtiple modals easy, here is the modal for the profile edit */
}
const EditProfileModal = () => {
  const { isOpen, onClose, type, data } = useModal();
  const router = useRouter();
  const { profile, cookie } = data;

  /**
   * Check if the modal is open and the type is EditProfile
   */
  const isModalOpen = isOpen && type === "EditProfile";

  const form = useForm<UserProfileEditValidator>({
    resolver: zodResolver(userProfileEditSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      bio: "",
    },
  });

  useEffect(() => {
    if (profile) {
      form.setValue("first_name", profile.first_name);
      form.setValue("last_name", profile.last_name);
      form.setValue("email", profile.email);
      form.setValue("phone", profile.phone);
      form.setValue("bio", profile.bio);
    }
  }, [profile, form]);
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: UserProfileEditValidator) => {
    try {
      await axios.patch(
        `https://cyparta-backend-gf7qm.ondigitalocean.app/api/profile/`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookie}`,
          },
        }
      );

      form.reset();

      onClose();
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white p-0 text-black overflow-hidden">
        <DialogHeader className="px-6 pt-8">
          <DialogTitle className="font-bold text-2xl text-center">
            Customize your profile
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Change your profile data{" "}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Form Content */}
            <div className="gap-4 grid grid-cols-2 px-6 w-full">
              <div className="flex gap-2 col-span-2">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-xs text-zinc-500 dark:text-secondary/70 uppercase">
                        First Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="border-0 bg-zinc-300/50 focus-visible:ring-0 focus-visible:ring-offset-0 text-black"
                          placeholder="Enter your first name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-xs text-zinc-500 dark:text-secondary/70 uppercase">
                        last name
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="border-0 bg-zinc-300/50 focus-visible:ring-0 focus-visible:ring-offset-0 text-black"
                          placeholder="Enter your last name name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex gap-2 col-span-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-xs text-zinc-500 dark:text-secondary/70 uppercase">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="border-0 bg-zinc-300/50 focus-visible:ring-0 focus-visible:ring-offset-0 text-black"
                          placeholder="Enter your Email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-xs text-zinc-500 dark:text-secondary/70 uppercase">
                        Phone
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="border-0 bg-zinc-300/50 focus-visible:ring-0 focus-visible:ring-offset-0 text-black"
                          placeholder="Enter your phone number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="gap-2 col-span-2">
                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-xs text-zinc-500 dark:text-secondary/70 uppercase">
                        Bio
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="border-0 bg-zinc-300/50 focus-visible:ring-0 focus-visible:ring-offset-0 text-black"
                          placeholder="Enter your Bio"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Footer */}
            <DialogFooter className="bg-gray-100 px-6 py-4 text-white">
              <Button variant="default" disabled={isLoading} type="submit">
                Save
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileModal;

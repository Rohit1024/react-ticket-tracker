import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { User, updateProfile } from "firebase/auth";
import {
  userAccountSchema,
  userAccountSchemaType,
} from "@/lib/validations/auth";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Icons } from "@/components/icons";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function UserAccountForm({ user }: { user: User }) {
  const form = useForm<userAccountSchemaType>({
    resolver: zodResolver(userAccountSchema),
    defaultValues: {
      displayName: user.displayName ?? "",
    },
  });
  const [isLoading, setLoading] = useState<boolean>(false);

  function onSubmit(values: userAccountSchemaType) {
    setLoading(true);
    updateProfile(user, {
      displayName: values.displayName,
    })
      .then(() => {
        toast.success("Profile updated Succefully");
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((error: any) => {
        console.log(error);
        toast.error(error.code, {
          description: error.message,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Form {...form}>
      <form
        className="grid gap-4"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="displayName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Display Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="john doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading && (
            <Icons.spinner
              className="mr-2 size-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Update Profile Details
          <span className="sr-only">Update Profile Details</span>
        </Button>
      </form>
    </Form>
  );
}

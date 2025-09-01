import SettingsTabs from "@/components/SettingsTabs";
import * as Input from "@/components/Input";
import * as FileInput from "@/components/Form/FileInput";
import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react";
import Select from "@/components/Form/Select";
import { SelectItem } from "@/components/Form/Select/SelectItem";
import Textarea from "@/components/Form/Textarea";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold dark:text-zinc-100">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex flex-col lg:flex-row justify-between pb-5 lg:items-center border-b gap-4 border-zinc-200">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50"
              type="button"
              variant="outline"
            >
              Cancel
            </Button>
            <Button type="submit" form="settings">
              Save
            </Button>
          </div>
        </div>

        <form
          id="settings-form"
          className="mt-6 flex flex-col w-full border gap-5 divide-y divide-zinc-200"
        >
          <div className="grid gap-3 lg:grid-cols-form">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid gap-6 lg:grid-cols-2">
              <Input.Root>
                <Input.Control id="firstName" placeholder="John" />
              </Input.Root>

              <div className="grid gap-3 lg:block">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-zinc-700 lg:sr-only"
                >
                  Last name
                </label>
                <Input.Root>
                  <Input.Control id="lastName" placeholder="Doe" />
                </Input.Root>
              </div>
            </div>
          </div>

          <div className="grid gap-3 lg:grid-cols-form pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="email"
                placeholder="you@example.com"
                type="email"
              />
            </Input.Root>
          </div>

          <FileInput.Root className="grid gap-3 lg:grid-cols-form pt-5">
            <FileInput.ImagePreview />
            <FileInput.Trigger />
            <FileInput.Control />
          </FileInput.Root>

          <div className="grid gap-3 lg:grid-cols-form pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <Input.Root>
              <Input.Control
                id="role"
                placeholder="Enter your role"
                type="text"
              />
            </Input.Root>
          </div>

          <div className="grid gap-3 lg:grid-cols-form pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>
            <Select placeholder="Select your country...">
              <SelectItem text="Brazil" value="br" />
              <SelectItem text="Argentina" value="ar" />
              <SelectItem text="Chile" value="cl" />
              <SelectItem text="Colombia" value="co" />
            </Select>
          </div>

          <div className="grid gap-3 lg:grid-cols-form pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
            <Select placeholder="Select your timezone...">
              <SelectItem
                text="Pacific Standard time (UTC-08:00)"
                value="utc-8"
              />
              <SelectItem
                text="Mountain Standard time (UTC-07:00)"
                value="utc-7"
              />
              <SelectItem
                text="Central Standard time (UTC-06:00)"
                value="utc-6"
              />
              <SelectItem
                text="Eastern Standard time (UTC-05:00)"
                value="utc-5"
              />
              <SelectItem
                text="Atlantic Standard time (UTC-04:00)"
                value="utc-4"
              />
              <SelectItem
                text="Greenwich Mean time (UTC+00:00)"
                value="utc+0"
              />
              <SelectItem
                text="Central European time (UTC+01:00)"
                value="utc+1"
              />
              <SelectItem
                text="Eastern European time (UTC+02:00)"
                value="utc+2"
              />
            </Select>
          </div>

          <div className="grid gap-3 lg:grid-cols-form pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <p className="text-sm font-normal text-zinc-500 mt-0.5">
                Write a short introduction.
              </p>
            </label>
            <div className="space-y-3">
              <div className="grid gap-3 lg:grid-cols-2">
                <Select defaultValue="normal">
                  <SelectItem
                    text="normal"
                    defaultChecked
                    value="Normal Text"
                  />
                  <SelectItem text="bold" value="Bold Text" />
                  <SelectItem text="italic" value="Italic Text" />
                </Select>

                <div className="flex items-center gap-1">
                  <Button type="button" variant="ghost">
                    <Bold className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                    <span className="sr-only">Bold</span>
                  </Button>
                  <Button type="button" variant="ghost">
                    <Italic className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                    <span className="sr-only">Italic</span>
                  </Button>
                  <Button type="button" variant="ghost">
                    <Link className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                    <span className="sr-only">Link</span>
                  </Button>
                  <Button type="button" variant="ghost">
                    <List className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                    <span className="sr-only">List</span>
                  </Button>
                  <Button type="button" variant="ghost">
                    <ListOrdered
                      className="w-4 h-4 text-zinc-500"
                      strokeWidth={3}
                    />
                    <span className="sr-only">List Ordered</span>
                  </Button>
                </div>
              </div>

              <Textarea
                id="bio"
                placeholder="Write a short introduction about yourself..."
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I love creating user-friendly interfaces and experiences."
              />
            </div>
          </div>

          <div className="grid gap-3 lg:grid-cols-form pt-5">
            <label
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700"
            >
              Portfolio projects
              <p className="text-sm font-normal text-zinc-500 mt-0.5">
                Share a few snippets of your work.
              </p>
            </label>
            <FileInput.Root className="grid gap-3 lg:grid-cols-form pt-5">
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50"
              type="button"
              variant="outline"
            >
              Cancel
            </Button>
            <Button type="submit" form="settings">
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

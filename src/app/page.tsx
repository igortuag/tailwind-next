import SettingsTabs from "@/components/SettingsTabs";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex justify-between items-center">
          <div></div>
          <div className="flex items-center gap-2">
            <button type="button">Cancel</button>
            <button type="submit" form="settings">Save</button>
          </div>
        </div>

        <form id="settings-form" action=""></form>
      </div>
    </div>
  );
}

import { SignIn } from "@clerk/nextjs";

export default function Page() {
	return (
		<div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
			<SignIn />
		</div>
	);
}

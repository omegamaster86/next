"use client";

import { Card, CardHeader, Heading } from "@chakra-ui/react";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export default function Home() {
	const { user } = useUser();
	console.log(user);

	return (
		<div className="bg-gradient-to-r from-purple-500 to-pink-500">
			<div className="p-10">
				<div className="flex items-center mb-5">
					<UserButton />
					<div className="ml-5">{user?.fullName}</div>
				</div>
				<Card maxW="sm">
					<CardHeader>
						<Heading size="md">
							<Link href={"/useActionStateUseTransition"}>
								useActionState/UseTransitionへ移動
							</Link>
						</Heading>
					</CardHeader>
				</Card>
				<Card maxW="sm" className="mt-5">
					<CardHeader>
						<Heading size="md">
							<Link href={"/useContext"}>useContextへ移動</Link>
						</Heading>
					</CardHeader>
				</Card>
				<Card maxW="sm" className="mt-5">
					<CardHeader>
						<Heading size="md">
							<Link href={"/useState"}>useStateへ移動</Link>
						</Heading>
					</CardHeader>
				</Card>
			</div>
		</div>
	);
}

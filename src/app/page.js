"use client"

// import Image from "next/image";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { useState } from "react";

export default function Home() {

	const [first_name, set_first_name] = useState("")
	const [last_name, set_last_name] = useState("")
	const [email, set_email] = useState("")
	const [alertMessage, setAlertMessage] = useState("");
	const [alertType, setAlertType] = useState("destructive"); // "destructive", "outline", or "destructive"

	async function handleSubmit() {
		if (first_name === "" || last_name === "" || email === "") {
			setAlertMessage("Please fill in all fields");
			setAlertType("destructive");

			setTimeout(() => {
				setAlertMessage("");
			}, 1000);

			return;
		}

		try {
			const res = await fetch("/api/contacts", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					firstname: first_name.trim(),
					lastname: last_name.trim(),
					email: email.trim(),
				}),
			});

			const data = await res.json();
			if (res.status === 200) {
				setAlertMessage("You have successfully joined the waitlist");
				setAlertType("outline");
				set_first_name("");
				set_last_name("");
				set_email("");

				setTimeout(() => {
					setAlertMessage("");
				}, 1000);
			} else if (res.status === 409) {
				setAlertMessage(data.message || "A contact with this email already exists.");
				setAlertType("destructive");

				setTimeout(() => {
					setAlertMessage("");
				}, 1000);
			} else {
				setAlertMessage(data.message || "An error occurred. Please try again.");
				setAlertType("destructive");

				setTimeout(() => {
					setAlertMessage("");
				}, 1000);
			}
		} catch (error) {
			setAlertMessage("An error occurred. Please try again later.");
			setAlertType("destructive");
		}
	}

	return (
		<div className="h-screen">
			<video
				className="absolute inset-0 w-full min-h-full object-cover"
				playsInline
				autoPlay
				muted
				loop
			>
				<source src="/mp4/bg.mp4" type="video/mp4" />
			</video>
			<div className="flex items-center relative justify-center min-h-screen bg-black/50">
				<div className="text-white text-center px-4 lg:px-0">
					<h1 className="text-3xl lg:text-6xl font-serif italic leading-tight mb-4">
						Fiuzar - AI-Powered Marketing Automation for Growing Businesses
					</h1>
					<p className="mb-5 text-lg">
						Fiuzar streamlines your entire marketing workflow with AI-powered automation, so you can focus on growing your business.
					</p>

					<Card className={`max-w-96 w-full mx-auto mb-20`}>
						<CardHeader>
							<CardTitle>Join the Waitlist & Get Exclusive Early Access!</CardTitle>
							<CardDescription>You can also follow Fiuzar on social media by clicking on the link below</CardDescription>
						</CardHeader>

						{/* {alertMessage && (
							<Alert variant={alertType}>
								<AlertTitle>{alertType === "outline" ? "Success" : "Error"}</AlertTitle>
								<AlertDescription>
									{alertMessage}
								</AlertDescription>
							</Alert>
						)} */}

						<div className="px-4 pr-6">
							{alertMessage && (
								<Alert variant={alertType} className={`mx-auto`}>
									<AlertDescription>
										{alertMessage}
									</AlertDescription>
								</Alert>
							)}
						</div>

						<CardContent className={`-mt-4`}>
							<div className="flex flex-col gap-2 mb-2">
								<Label htmlFor="email">First Name</Label>
								<Input
									id="first_name"
									type="text"
									placeholder="Enter your first name"
									value={first_name}
									onChange={(e) => set_first_name(e.target.value)}
								/>
							</div>
							<div className="flex flex-col gap-2 mb-2">
								<Label htmlFor="email">Last Name</Label>
								<Input
									id="last_name"
									type="text"
									placeholder="Enter your last name"
									value={last_name}
									onChange={(e) => set_last_name(e.target.value)}
								/>
							</div>
							<div className="flex flex-col gap-2 mb-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									placeholder="Enter your email address"
									value={email}
									onChange={(e) => set_email(e.target.value)}
								/>
							</div>
							<Button className={`py-6 w-full max-w-44 mt-3`} onClick={handleSubmit}>Join</Button>
						</CardContent>
					</Card>

				</div>


			</div>
		</div>
	);
}

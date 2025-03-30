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

export default function Home() {
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
						<CardContent>
							<div className="flex flex-col gap-2 mb-2">
								<Label htmlFor="email">First Name</Label>
								<Input
									id="first_name"
									type="text"
									placeholder="Enter your first name"
								/>
							</div>
							<div className="flex flex-col gap-2 mb-2">
								<Label htmlFor="email">Last Name</Label>
								<Input
									id="last_name"
									type="text"
									placeholder="Enter your last name"
								/>
							</div>
							<div className="flex flex-col gap-2 mb-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									placeholder="Enter your email address"
									required
								/>
							</div>
							<Button className={`py-6 w-full max-w-44 mt-3`}>Join</Button>
						</CardContent>
					</Card>
					
				</div>

			
			</div>
		</div>
	);
}

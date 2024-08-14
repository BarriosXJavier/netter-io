"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { MailIcon, ArrowRight } from "lucide-react";

const HeroForm: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/addSubscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: input }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Successfully subscribed!");
      } else {
        setMessage(result.error || "Subscription failed.");
      }
    } catch (error) {
      setMessage("An error occurred.");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="mx-auto space-y-6">
      <div className="space-y-2 text-center">
        <h3 className="text-3xl font-bold text-transparent duration-1000 bg-white cursor-default text-stroke animate-title sm:text-5xl md:text-6xl whitespace-nowrap bg-clip-text">
          Subscribe to our
        </h3>
        <h1 className="z-10 text-4xl font-bold text-center cursor-default sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text duration-1000 text-transparent bg-white from-purple-100 bg-gradient-to-r to-purple-900 animate-fade-in-3">
          Newsletter
        </h1>
        <p className="text-muted-foreground">
          Get the latest updates and exclusive content delivered to your inbox.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="relative flex items-center w-full">
          <MailIcon
            className="absolute left-3 text-muted-foreground"
            size={18}
          />
          <Input
            type="email"
            placeholder="Email Address"
            className="w-full bg-[#64748B] text-muted-foreground pl-10 pr-20"
            required
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            className="absolute right-1 bg-[#AC58F5] px-2 py-2"
          >
            Submit &nbsp; <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </form>
      {message && <p className="text-center mt-4">{message}</p>}
    </div>
  );
};

export default HeroForm;

import { Input } from "../ui/input";
import { Button } from "../ui/button";

const HeroForm = () => {
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
      <form className="flex gap-2 w-full">
        <Input
          type="email"
          placeholder="Enter your email"
          className="flex-1"
          required
        />
        <Button type="submit" className="bg-[#AC58F5]">
          Subscribe
        </Button>
      </form>
    </div>
  );
};

export default HeroForm;

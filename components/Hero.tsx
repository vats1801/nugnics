import React, { useState } from "react";
import { ArrowRight, Loader2, CheckCircle, Bot } from "lucide-react";
import { Placeholder } from "./Placeholder";
import { saveEmail } from "../firebase";
import Snackbar from "./Snackbar";

const Hero: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [snackbar, setSnackbar] = useState<{
    message: string;
    type: "success" | "error";
    isOpen: boolean;
  }>({ message: "", type: "error", isOpen: false });

  const handleSubmit = async () => {
    // Validate email
    if (!email || !email.includes("@")) {
      setSnackbar({
        message: "Please enter a valid email address",
        type: "error",
        isOpen: true,
      });
      return;
    }

    setIsLoading(true);
    setIsSuccess(false);
    setSnackbar({ message: "", type: "error", isOpen: false });

    try {
      // Save email to Firebase and wait for API response
      const response = await saveEmail(email);

      // Only show success state after successful API response
      if (response && response.success) {
        setIsLoading(false);
        setIsSuccess(true);
        setSnackbar({
          message: "Thanks! We'll contact you shortly.",
          type: "success",
          isOpen: true,
        });

        // Reset success state after 3 seconds (only on successful API response)
        setTimeout(() => {
          setIsSuccess(false);
          setEmail("");
        }, 3000);
      }
    } catch (error: any) {
      console.error("Error saving email:", error);
      setIsLoading(false);
      setIsSuccess(false); // Ensure success state is false on error

      // Display the error message in snackbar
      setSnackbar({
        message: error?.message || "Failed to save. Please try again.",
        type: "error",
        isOpen: true,
      });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center pt-32 pb-20 px-4 text-center overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-600/20 opacity-30 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
          Instantly Engage Customers <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-violet-600">
            with Smart AI Chatbots
          </span>
        </h1>

        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Automate conversations, boost sales, and provide 24/7 support, all
          with one intelligent chatbot platform designed for your business.
        </p>

        {/* Input Group */}
        <div id="email-input" className="mb-16 w-full max-w-xl mx-auto">
          <div className="relative flex items-center rounded-full bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-blue-500/20 p-[2px] border border-transparent bg-clip-padding">
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/50 via-violet-400/50 to-blue-400/50 -z-10 blur-sm"></div>

            <div className="flex flex-1 items-center rounded-full bg-[#050505] overflow-hidden">
              {/* Input Field */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !isLoading && !isSuccess) {
                    handleSubmit();
                  }
                }}
                placeholder="Enter your business email"
                className="flex-1 bg-transparent text-white px-6 py-4 outline-none placeholder:text-gray-500 text-sm"
              />

              {/* Button */}
              <button
                onClick={handleSubmit}
                disabled={isLoading || isSuccess}
                className={`whitespace-nowrap px-6 py-4 rounded-full transition-all font-medium flex items-center justify-center gap-2 ${
                  isSuccess
                    ? "bg-green-600 text-white"
                    : isLoading
                    ? "bg-gradient-to-r from-violet-600/70 to-blue-600/70 text-white cursor-not-allowed"
                    : "bg-gradient-to-r from-violet-500 to-blue-500 text-white hover:from-violet-600 hover:to-blue-600"
                }`}
              >
                {isSuccess ? (
                  <>
                    <CheckCircle size={16} />
                    Request Submitted!
                  </>
                ) : isLoading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Get your AI Agent
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Hero Visual Placeholder */}
        <div className="relative mx-auto w-full max-w-3xl perspective-1000">
          <div className="relative rounded-2xl bg-neutral-900/50 p-2 border border-white/10 shadow-2xl shadow-violet-900/20 backdrop-blur-sm">
            {/* <Placeholder
              label="Dashboard / Conversation Screenshot"
              height="h-[400px] md:h-[500px]"
            /> */}
            <img
              src="https://static.driffle.com/media-gallery/production/fa6c30be-49d1-4559-80e3-a9e3dc47de08_image-17.png"
              alt="Dashboard / Conversation Screenshot"
              className="w-full h-full object-cover rounded-lg"
            />
            {/* Floating UI Elements Mockup (CSS only decorations) */}
            <div className="absolute -left-12 top-1/3 hidden md:flex items-center gap-3 bg-neutral-800/90 border border-white/10 p-3 rounded-xl shadow-lg backdrop-blur-md animate-bounce duration-[3000ms]">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-xs font-medium">98% Satisfaction</span>
            </div>

            <div className="absolute -right-8 bottom-1/4 hidden md:flex items-center gap-3 bg-neutral-800/90 border border-white/10 p-3 rounded-xl shadow-lg backdrop-blur-md animate-bounce duration-[4000ms]">
              <div className="h-8 w-8 rounded-full bg-violet-600 flex items-center justify-center text-xs">
                <Bot size={20} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-medium">Ticket Resolved</span>
                <span className="text-[10px] text-gray-400">Just now</span>
              </div>
            </div>

            {/* AI Message */}
            <div className="absolute -left-16 top-[70%] hidden md:flex items-start gap-3 bg-neutral-800/90 border border-white/10 p-3 rounded-xl shadow-lg backdrop-blur-md animate-bounce duration-[3500ms] max-w-[280px]">
              <div className="h-8 w-8 rounded-full bg-violet-600 flex items-center justify-center text-xs font-semibold flex-shrink-0">
                <Bot size={20} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-medium text-white">
                  Hi John! You can return your purchase within 7 days.
                </span>
              </div>
            </div>

            {/* John Message */}
            <div className="absolute -right-16 top-1/3 hidden md:flex items-start gap-3 bg-neutral-800/90 border border-white/10 p-3 rounded-xl shadow-lg backdrop-blur-md animate-bounce duration-[4500ms] max-w-[280px]">
              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-semibold flex-shrink-0">
                J
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-medium text-white">
                  How much Time Do i have for my order return
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Snackbar for notifications */}
      <Snackbar
        message={snackbar.message}
        type={snackbar.type}
        isOpen={snackbar.isOpen}
        onClose={() => setSnackbar({ ...snackbar, isOpen: false })}
      />
    </section>
  );
};

export default Hero;

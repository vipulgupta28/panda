
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 text-white flex flex-col items-center justify-center p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold text-center mb-6"
      >
        Talk to the World, Anonymously
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg md:text-xl text-center max-w-xl mb-8"
      >
        Connect with strangers around the globe. No sign-up. No tracking. Just pure, unfiltered conversations.
      </motion.p>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <button className="text-lg px-8 py-4 rounded-2xl bg-white text-purple-800 font-semibold shadow-lg hover:bg-purple-200 transition-all">
          Start Chatting <ArrowRight className="ml-2" />
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full"
      >
        <FeatureCard
          title="Global Reach"
          description="Meet people from any country and culture. Broaden your perspective."
        />
        <FeatureCard
          title="100% Anonymous"
          description="No names, no emails. Your identity stays yours."
        />
        <FeatureCard
          title="Free Forever"
          description="No paywalls or subscriptions. Start chatting now."
        />
      </motion.div>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white shadow-md hover:shadow-xl transition-all">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-white/80">{description}</p>
    </div>
  );
}

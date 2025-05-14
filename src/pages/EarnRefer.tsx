import { motion } from "framer-motion";
import {
  Gift,
  DollarSign,
  Users,
  Briefcase,
  Rocket,
  ArrowRight,
  Star,
  CheckCircle2,
} from "lucide-react";
import Seo from "../components/SEO";
import { Link } from "react-router-dom";

export default function ReferAndEarn() {
  const referralTypes = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Internship Referrals",
      description:
        "Earn 10% commission when your referred candidates join our internship program.",
      example:
        "Example: For a ₦20,000 internship fee, you earn ₦2,000 per referral.",
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Training Referrals",
      description:
        "Get 10% of the training fee for each student you refer to our training programs.",
      example:
        "Example: For a ₦20,000 training fee, you earn ₦2,000 per referral.",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Talent Hiring Referrals",
      description:
        "Earn 10% of the placement fee when companies you refer hire our talents.",
      example:
        "Example: For a $5,000 placement fee, you earn $500 per successful hire.",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Project Referrals",
      description:
        "Receive 10% commission on software development projects you refer to us.",
      example: "Example: For a $10,000 project, you earn $1,000 in commission.",
    },
  ];

  const steps = [
    "Share your unique referral link with potential clients or candidates",
    "Track your referrals through our dashboard",
    "Earn commission when your referrals convert",
    "Get paid monthly for all successful referrals",
  ];

  return (
    <>
      <Seo
        title="Refer & Earn - Zimcrest Technologies"
        description="Join our referral program and earn commissions by referring internship candidates, training students, and companies looking to hire tech talent."
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-green-50 via-white to-white overflow-hidden pt-28">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
          <div className="absolute top-0 right-0 w-1/2 transform rounded-full h-1/2 bg-gradient-to-b from-green-200 to-emerald-200 blur-3xl opacity-20 translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-1/2 transform rounded-full h-1/2 bg-gradient-to-t from-emerald-200 to-green-200 blur-3xl opacity-20 -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative z-10 px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.span
                  className="inline-block px-4 py-2 mb-4 text-sm font-medium text-green-800 bg-green-100 rounded-full"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Earn While You Connect
                </motion.span>

                <motion.h1
                  className="mb-6 text-2xl font-bold leading-tight md:text-4xl lg:text-5xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Turn Your Network Into
                  <span className="block gradient-text">Passive Income</span>
                </motion.h1>

                <motion.p
                  className="mb-8 text-base leading-relaxed text-gray-600 md:text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Join our referral program and earn generous commissions by
                  connecting us with potential clients, students, and job
                  candidates. Start earning today with zero investment.
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.button
                    className="flex items-center text-sm btn-primary md:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Rocket className="w-5 h-5 mr-2" />
                    Start Earning
                  </motion.button>
                  <button className="flex items-center text-sm btn-secondary md:text-base">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </motion.div>

                <motion.div
                  className="grid grid-cols-3 gap-6 mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {[
                    { number: "$50K+", label: "Paid to Partners" },
                    { number: "1000+", label: "Active Partners" },
                    { number: "24h", label: "Fast Payouts" },
                  ].map((stat) => (
                    <div key={crypto.randomUUID()} className="text-center">
                      <p className="text-lg font-bold md:text-2xl gradient-text">
                        {stat.number}
                      </p>
                      <p className="text-sm leading-tight text-gray-500">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              className="relative lg:h-[600px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1200&q=80"
                  alt="Earning through referrals"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <motion.div
                className="absolute p-4 pb-6 bg-white shadow-xl -bottom-6 -left-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Average Earnings</p>
                    <p className="text-sm text-gray-500">$500/month</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute p-3 bg-white shadow-xl -top-6 -right-6 rounded-xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-yellow-100 rounded-full">
                    <Star className="w-5 h-5 text-yellow-600" />
                  </div>
                  <p className="text-sm font-medium">Top Partner Benefits</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Referral Types */}
      <div className="px-4 py-12 md:px-6">
        <div className="grid gap-8 mb-16 md:grid-cols-2">
          {referralTypes.map((type, index) => (
            <motion.div
              key={crypto.randomUUID()}
              className="p-8 bg-white rounded-xl shadow-soft"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4 text-primary-600 md:size-6 size-4">
                {type.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold md:text-xl">
                {type.title}
              </h3>
              <p className="mb-4 text-sm text-gray-600 md:text-base">
                {type.description}
              </p>
              <p className="text-sm font-medium text-primary-600">
                {type.example}
              </p>
            </motion.div>
          ))}
        </div>

        {/* How It Works */}
        <motion.div
          className="p-5 mb-16 text-white md:p-12 bg-gradient-to-r from-primary-600 to-violet-600 rounded-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="mb-8 text-xl font-bold text-center md:text-3xl">
            How It Works
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={crypto.randomUUID()} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 text-2xl font-bold rounded-full bg-white/20">
                  {index + 1}
                </div>
                <p className="text-sm md:text-base">{step}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="mb-8 text-xl font-bold text-center md:text-3xl gradient-text">
            Partner Benefits
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <DollarSign className="w-8 h-8" />,
                title: "Competitive Commission",
                description:
                  "Earn up to 10% commission on every successful referral",
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Quick Payouts",
                description: "Get paid within 24 hours of referral conversion",
              },
              {
                icon: <CheckCircle2 className="w-8 h-8" />,
                title: "Dedicated Support",
                description:
                  "Access to partner dashboard and marketing materials",
              },
            ].map((benefit, index) => (
              <motion.div
                key={crypto.randomUUID()}
                className="p-6 text-center bg-white rounded-xl shadow-soft"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="mx-auto mb-4 text-primary-600 w-fit"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="mb-3 text-lg font-bold md:text-xl">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 md:text-base">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h2 className="mb-8 text-3xl font-bold">Start Earning Today</h2>
          <Link to={"/consultation"} className="btn-primary">
            Join Referral Program
          </Link>
        </motion.div>
      </div>
    </>
  );
}

import {
    Eye,
    Shield,
    Users,
    Database,
    Award,
    Search,
    Lock,
    FileCheck,
} from "lucide-react";

const stats = [
    {
        icon: <Eye size={38} />,
        value: "95%",
        label: "SUCCESS RATE",
    },
    {
        icon: <Users size={38} />,
        value: "85%",
        label: "CLIENT SUCCESS",
    },
    {
        icon: <Shield size={38} />,
        value: "85%",
        label: "SECURITY SCORE",
    },
    {
        icon: <Award size={38} />,
        value: "85%",
        label: "AWARD ACHIEVED",
    },
];

export default function ClientReviewSuccessRate() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="
                group
                relative
                bg-white
                rounded-b-3xl
                border
                border-slate-200
                text-center
                pt-24
                overflow-visible
                transition-all
                duration-500
                hover:-translate-y-4
                hover:shadow-2xl
                hover:shadow-purple-500/20
              "
                        >
                            {/* Floating Icon */}
                            <div className="absolute -top-14 left-1/2 -translate-x-1/2">
                                <div
                                    className="
                    w-28 h-28
                    rounded-full
                    bg-gradient-to-br
                    from-blue-600
                    via-purple-600
                    to-indigo-600
                    flex
                    items-center
                    justify-center
                    text-white
                    shadow-xl
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:rotate-6
                  "
                                >
                                    {item.icon}
                                </div>
                            </div>

                            {/* Percentage */}
                            <div className="pb-10">
                                <h3
                                    className="
                    text-6xl
                    font-bold
                    text-slate-900
                    transition-all
                    duration-300
                    group-hover:text-purple-600
                  "
                                >
                                    {item.value}
                                </h3>
                            </div>

                            {/* Bottom Bar */}
                            <div
                                className="
                  relative
                  overflow-hidden
                  bg-gradient-to-br
                  from-blue-600
                  via-purple-600
                  to-indigo-600
                  text-white
                  font-bold
                  py-7
                  uppercase
                  rounded-b-3xl
                "
                            >
                                <span className="relative z-10">{item.label}</span>

                                {/* Shine Effect */}
                                <div
                                    className="
                    absolute
                    top-0
                    -left-full
                    h-full
                    w-full
                    bg-white/20
                    skew-x-12
                    transition-all
                    duration-700
                    group-hover:left-full
                  "
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
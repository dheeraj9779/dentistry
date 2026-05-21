export const services = [
  {
    id: "SVC-001",
    category: "Preventive Care",
    service_name: "Routine Cleaning & Examination",
    description:
      "Professional dental cleaning followed by a comprehensive exam to check for cavities and gum disease.",
    duration_minutes: 60,
    is_available: true,
    image:
      "https://images.unsplash.com/photo-1670250492416-570b5b7343b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGVudGlzdHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "SVC-002",
    category: "Restorative",
    service_name: "Composite Filling",
    description:
      "Tooth-colored resin used to restore decayed or damaged tooth structure.",
    duration_minutes: 45,
    is_available: true,
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVudGlzdHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "SVC-003",
    category: "Cosmetic",
    service_name: "In-Office Professional Whitening",
    description:
      "Advanced whitening treatment to brighten teeth by several shades in a single session.",
    duration_minutes: 90,
    is_available: true,
    image:
      "https://images.unsplash.com/photo-1590424693420-634a0b0b782c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGRlbnRpc3R8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "SVC-004",
    category: "Emergency",
    service_name: "Root Canal Therapy",
    description:
      "Treatment to remove infected pulp from inside the tooth and seal it to prevent further damage.",
    duration_minutes: 120,
    is_available: true,
    image:
      "https://images.unsplash.com/photo-1681939278218-a755fb2bf2d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGRlbnRpc3R8ZW58MHx8MHx8fDA%3D",
  },
];

export const questions = [
  {
  id: "main_problem",
  question: "What brings you here today?",
  options: [
    "Tooth Pain",
    "Bleeding Gums",
    "Bad Breath",
    "Routine Checkup",
  ],
},

  {
  id: "pain_level",
  question: "How severe is the discomfort?",
  options: [
    "Mild",
    "Moderate",
    "Severe",
    "Unbearable",
  ],
},
{
  id: "duration",
  question: "How long have you had this issue?",
  options: [
    "1-2 Days",
    "1 Week",
    "Several Weeks",
    "Several Months",
  ],
},
{
  id: "sensitivity",
  question: "Do you feel sensitivity while eating or drinking?",
  options: [
    "Cold Items",
    "Hot Items",
    "Both",
    "No Sensitivity",
  ],
},
{
  id: "gum_issue",
  question: "Are you experiencing swelling or bleeding?",
  options: [
    "Swelling",
    "Bleeding",
    "Both",
    "None",
  ],
},
{
  id: "eating_problem",
  question: "Do you have difficulty chewing food?",
  options: [
    "Yes, Frequently",
    "Sometimes",
    "Rarely",
    "No",
  ],
}
];


export const doctors = [
  {
    id: 1,
    name: "Dr. John Smith",
    role: "Orthodontics Specialist",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
    bg: "bg-gradient-to-br from-cyan-400 to-blue-500",
  },
  {
    id: 2,
    name: "Dr. David Kim",
    role: "Endodontics Specialist",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d",
    bg: "bg-gradient-to-br from-purple-400 to-pink-500",
  },
  {
    id: 3,
    name: "Dr. Sarah Lee",
    role: "Periodontics Specialist",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
    bg: "bg-gradient-to-br from-yellow-400 to-orange-500",
  },
  {
    id: 4,
    name: "Dr. Steven Lee",
    role: "Cosmetic Dentistry",
    image:
      "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47",
    bg: "bg-gradient-to-br from-blue-400 to-indigo-500",
  },
  {
    id: 5,
    name: "Dr. John Smith",
    role: "Orthodontics Specialist",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
    bg: "bg-gradient-to-br from-cyan-400 to-blue-500",
  },
  {
    id: 6,
    name: "Dr. David Kim",
    role: "Endodontics Specialist",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d",
    bg: "bg-gradient-to-br from-purple-400 to-pink-500",
  },
  {
    id: 7,
    name: "Dr. Sarah Lee",
    role: "Periodontics Specialist",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
    bg: "bg-gradient-to-br from-yellow-400 to-orange-500",
  },
  {
    id: 8,
    name: "Dr. Steven Lee",
    role: "Cosmetic Dentistry",
    image:
      "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47",
    bg: "bg-gradient-to-br from-blue-400 to-indigo-500",
  }
];
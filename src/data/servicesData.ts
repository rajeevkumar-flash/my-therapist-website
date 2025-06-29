
import anxietyImage from '../../public/images/Stress Management.jpg'; // Assuming you have these images in the public folder
import relationshipImage from '../../public/images/Relationship.jpg';
import traumaImage from '../../public/images/Turma.jpg';

export const detailedServices = [
  {
    title: 'Anxiety & Stress Management',
    slug: 'anxiety-stress-management',
    shortDescription: 'Navigate the complexities of modern life with proven strategies to manage anxiety and reduce stress. Learn coping mechanisms and build resilience for a calmer, more balanced existence.',
    image: anxietyImage,
    detailedDescription: [
      {
        heading: "How it impacts daily life:",
        text: "Anxiety and chronic stress can manifest as persistent worry, restlessness, fatigue, and physical symptoms like headaches or muscle tension. It can interfere with sleep, concentration, and your ability to enjoy social activities or work, creating a constant state of unease. Over time, it can lead to burnout and affect your physical health."
      },
      {
        heading: "How Dr. Blake helps:",
        text: "Dr. Blake uses evidence-based approaches like Cognitive Behavioral Therapy (CBT) and mindfulness to help you understand the root of your anxiety. She provides practical tools to challenge negative thought patterns and develop effective coping strategies, empowering you to regain control and find inner calm. Sessions are personalized to your specific stressors and goals."
      }
    ],
    successRate: 90, // In percentage
    casesTaken: 350,
  },
  {
    title: 'Relationship Counseling',
    slug: 'relationship-counseling',
    shortDescription: 'Strengthen your connections and foster healthier interactions with loved ones. Through guided sessions, improve communication, resolve conflicts, and build deeper, more fulfilling relationships.',
    image: relationshipImage,
    detailedDescription: [
      {
        heading: "How it impacts daily life:",
        text: "Relationship issues can lead to feelings of loneliness, resentment, and a breakdown in communication. Unresolved conflicts and emotional distance can affect your sense of security and happiness, spilling over into other areas of your life, including work and family dynamics."
      },
      {
        heading: "How Dr. Blake helps:",
        text: "Dr. Blake works with individuals and couples to improve communication skills, foster empathy, and develop healthier conflict-resolution strategies. She provides a safe space to explore difficult emotions and patterns, helping you and your loved one build a stronger foundation based on mutual respect and understanding."
      }
    ],
    successRate: 85,
    casesTaken: 100,
  },
  {
    title: 'Trauma Recovery',
    slug: 'trauma-recovery',
    shortDescription: 'Heal from past experiences and move towards a more peaceful future. Dr. Blake offers a compassionate and evidence-based approach to process trauma and reclaim your sense of safety and well-being.',
    image: traumaImage,
    detailedDescription: [
      {
        heading: "How it impacts daily life:",
        text: "Trauma can leave deep emotional scars, leading to symptoms like flashbacks, nightmares, hyper-vigilance, and emotional numbness. It can disrupt your ability to form healthy relationships, trust others, and feel safe in the world, making it difficult to live a full and vibrant life."
      },
      {
        heading: "How Dr. Blake helps:",
        text: "Utilizing a trauma-informed approach, Dr. Blake creates a supportive and non-judgmental environment for you to process your experiences. She integrates techniques from various therapies to help you regulate emotions, reduce distressing symptoms, and gradually reclaim your sense of self and safety. The goal is to help you build resilience and move forward."
      }
    ],
    successRate: 95,
    casesTaken: 50,
  },
];
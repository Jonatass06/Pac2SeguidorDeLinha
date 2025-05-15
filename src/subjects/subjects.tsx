export const subjects: Subject[] = [
  {
    slug: "components",
    id: 1,
    title: "Components",
    image: <div className="h-64 sm:w-80 w-full bg-blue-500" />,
    content: [
      {
        id: "1",
        title: "Introduction",
        content: `The construction of a line-following robot begins with understanding its essential components. These include sensors, motors, a chassis, and a controller board that work together to enable movement and navigation.`,
      },
      {
        id: "2",
        title: "Image",
        content: <img src="/images/components-overview.png" alt="Line-following robot components" />,
      },
      {
        id: "3",
        title: "Conclusion",
        content: `Choosing quality components is critical for the robot’s accuracy and stability. Each part must be integrated properly to ensure consistent performance in following a path.`,
      },
    ],
    subtitles: [
      {
        slug: "basic-components",
        id: 11,
        title: "Basic Components",
        image: <></>,
        content: [
          {
            id: "1",
            title: "Introduction",
            content: `The robot's base components are the motors, wheels, sensor array, and control board. These form the foundation of the project.`,
          },
          {
            id: "2",
            title: "Image",
            content: <img src="/images/basic-components.png" alt="Basic components" />,
          },
          {
            id: "3",
            title: "Conclusion",
            content: `With just a few parts and careful assembly, you can create a simple yet effective robot for line-following tasks.`,
          },
        ],
        subtitles: [],
      },
      {
        slug: "how-to-assemble",
        id: 12,
        title: "How to Assemble",
        image: <></>,
        content: [
          {
            id: "1",
            title: "Introduction",
            content: `Start by mounting the motors on the chassis, connecting the wheels, and wiring the sensors to the controller board.`,
          },
          {
            id: "2",
            title: "Image",
            content: <img src="/images/assembly-guide.png" alt="Assembly process" />,
          },
        ],
        subtitles: [],
      },
      {
        slug: "main-functions",
        id: 13,
        title: "Main Functions",
        image: <></>,
        content: [
          {
            id: "1",
            title: "Introduction",
            content: `Each component has a specific role—motors drive motion, sensors detect lines, and the controller makes decisions based on sensor input.`,
          },
          {
            id: "2",
            title: "Image",
            content: <img src="/images/function-diagram.png" alt="Component functions" />,
          },
          {
            id: "3",
            title: "Function 1",
            content: `Motors receive PWM signals to control speed and direction.`,
          },
          {
            id: "4",
            title: "Function 2",
            content: `IR sensors detect the contrast between line and surface.`,
          },
          {
            id: "5",
            title: "Function 3",
            content: `The microcontroller interprets sensor input and decides motion strategy.`,
          },
        ],
        subtitles: [],
      },
    ],
  },
  {
    slug: "line-follower",
    id: 2,
    title: "Line Follower",
    image: <div className="h-64 sm:w-96 w-full bg-blue-500" />,
    content: [
      {
        id: "1",
        title: "How It Works",
        content: `A line-following robot uses infrared sensors to detect a black line on a white surface. The robot adjusts its movement based on the position of the line relative to the sensors.`,
      },
    ],
    subtitles: [
      {
        slug: "line-detection",
        id: 21,
        title: "Line Detection",
        image: <></>,
        content: [
          {
            id: "1",
            title: "Straight Paths",
            content: `In a straight line, the central sensor stays aligned with the path while side sensors assist in minor corrections.`,
          },
        ],
        subtitles: [],
      },
    ],
  },
  {
    slug: "hardware",
    id: 3,
    title: "Hardware",
    image: <div className="h-64 sm:w-96 w-full bg-blue-500" />,
    content: [
      {
        id: "1",
        title: "Key Hardware",
        content: `The robot’s physical components include the chassis, power source, DC motors, IR sensors, and the main control board (like an Arduino or ESP32).`,
      },
    ],
    subtitles: [
      {
        slug: "main-hardware",
        id: 31,
        title: "Main Hardware",
        image: <></>,
        content: [
          {
            id: "1",
            title: "Motors",
            content: `DC motors provide movement. Paired with an H-bridge driver, they allow for precise direction and speed control.`,
          },
        ],
        subtitles: [],
      },
    ],
  },
  {
    slug: "code",
    id: 4,
    title: "Code",
    image: <div className="h-64 sm:w-96 w-full bg-blue-500" />,
    content: [
      {
        id: "1",
        title: "Core Functions",
        content: `The code interprets sensor inputs, calculates necessary movement, and adjusts motor speed using algorithms like PID control.`,
      },
    ],
    subtitles: [
      {
        slug: "main-functions",
        id: 41,
        title: "Main Functions",
        image: <></>,
        content: [
          {
            id: "1",
            title: "Conditional Logic",
            content: `Based on sensor input, the robot decides whether to go straight, turn left, or right. This logic is implemented with simple if/else or switch statements.`,
          },
        ],
        subtitles: [],
      },
    ],
  },
  {
    slug: "track",
    id: 5,
    title: "Track",
    image: <div className="h-64 sm:w-96 w-full bg-blue-500" />,
    content: [
      {
        id: "1",
        title: "Course Design",
        content: `Designing a test track helps in debugging and refining the robot’s movement. It can include curves, intersections, and dead ends.`,
      },
    ],
    subtitles: [
      {
        slug: "course",
        id: 51,
        title: "Course",
        image: <></>,
        content: [
          {
            id: "1",
            title: "Track 1",
            content: `The basic course includes straight lines and 90-degree turns. This layout is ideal for testing sensor sensitivity and response algorithms.`,
          },
        ],
        subtitles: [],
      },
    ],
  },
];


export interface Subject {
  id: number;
  slug: string;
  title: string;
  image: React.ReactNode;
  content: Content[];
  subtitles?: Subject[];
}

export interface Content {
  id: string;
  title: string;
  content: string | React.ReactNode;
}

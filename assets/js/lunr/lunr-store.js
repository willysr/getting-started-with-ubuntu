var store = [{
        "title": "Modules",
        "excerpt":"This course contains the following modules: Motivation Course objectives Linux Installation process Command line Assessment for Module 1 - Linux Getting started with ROS ROS installation ROS development Assessment for Module 2 - ROS configuration and structure Version Control systems Git Assessment for Module 3 - Version control systems Build...","categories": [],
        "tags": [],
        "url": "/modules/index.html",
        "teaser": null
      },{
        "title": "Motivation",
        "excerpt":"Software running on any computing device requires an operating system (OS), which manages software and hardware on a computer. The one that has the biggest share is Microsoft Windows, followed by Mac OS – for example, for desktop computers, an estimated share in July 2020 is 77.74% vs. 17.07% for...","categories": [],
        "tags": [],
        "url": "/modules/0/motivation.html",
        "teaser": null
      },{
        "title": "Course objectives",
        "excerpt":"How are the computers on the robots seen in the previous unit’s video configured? This course will give you the basics on Linux OS, ROS configuration, and development tools, allowing you to have an environment to build and develop a robotics system and software. Four learning modules are part of...","categories": [],
        "tags": [],
        "url": "/modules/0/objectives.html",
        "teaser": null
      },{
        "title": "Linux",
        "excerpt":"In this module, we will discover the main features of such an operating system and put in practice some commands that will allow us to work with a command-line. This skill is necessary to work with real robots and servers on the cloud. What is Linux? Linux is an operating...","categories": [],
        "tags": [],
        "url": "/modules/1/linux.html",
        "teaser": null
      },{
        "title": "Installation process",
        "excerpt":"There are multiple ways to install a new operating system. All of them have three steps that are in common: Download of the OS image. Preparation of the device used for installation. Boot from that device and follow the installation process. For practice, we will use a virtual machine –...","categories": [],
        "tags": [],
        "url": "/modules/1/installation.html",
        "teaser": null
      },{
        "title": "Command line",
        "excerpt":"Let’s see some useful commands in the commandline in Ubuntu, which will be useful to navigate the filesystem in the computer of a robot or in a server in the cloud. Please refer for complete information to (Cooper, 2014). Open a new Terminal from the list of applications. A new...","categories": [],
        "tags": [],
        "url": "/modules/1/commandline.html",
        "teaser": null
      },{
        "title": "Assessment for Module 1 - Linux",
        "excerpt":"Linux commands This assignment is to help you self-assess your comprehension on Linux. Read carefully each question. Once answered, you will receive feedback. Good luck! Q1 You have a file robot_script.sh with read-only permission in your current directory belonging to the current user class. class@ubuntu:~$ ls -al robot_script.sh -r--r--r-- 1...","categories": [],
        "tags": [],
        "url": "/modules/1/assessment.html",
        "teaser": null
      },{
        "title": "Getting started with ROS",
        "excerpt":"In this module, we will discover the main features provided by the Robot Operating system (ROS), which will allow us to develop robotic software and enable behaviors. What is ROS? According to its page, ROS is described as follows: ROS is an open-source, meta-operating system for your robot. It provides...","categories": [],
        "tags": [],
        "url": "/modules/2/ros.html",
        "teaser": null
      },{
        "title": "ROS installation",
        "excerpt":"There are multiple versions of ROS depending on the Ubuntu version. There are different ways to install ROS, including compiling the source code or using Docker – a lightweight virtual machine. In general, unless there are specific features necessary that are included only in short term support version of ROS...","categories": [],
        "tags": [],
        "url": "/modules/2/ros-installation.html",
        "teaser": null
      },{
        "title": "ROS development",
        "excerpt":"ROS software is organized in packages (ROS, 2020), each containing collection of files, including configuration files, executables, source code, etc. Each package is typically logically organized to provide specific functionalities to robots. For example, there is a package for Simultaneous Localization and Mapping, called ‘gmapping’. A specific command to check...","categories": [],
        "tags": [],
        "url": "/modules/2/ros-development.html",
        "teaser": null
      },{
        "title": "Assessment for Module 2 - ROS configuration and structure",
        "excerpt":"ROS configuration and structure This assignment is to help you self-assess your comprehension on ROS. Read carefully each question. Once answered, you will receive feedback. Good luck! Q1 The command source /opt/ros/melodic/setup.bash is for 1. will set the environment variables so that all ROS commands are available at command line....","categories": [],
        "tags": [],
        "url": "/modules/2/assessment.html",
        "teaser": null
      },{
        "title": "Version Control systems",
        "excerpt":"As best practice for software development, source code is stored on repositories tracked by version control systems, which allows for managing software changes over time. This is extremely important for teams of multiple people, but also for a single developer it provides several benefits, including the ability to back up...","categories": [],
        "tags": [],
        "url": "/modules/3/version-control-systems.html",
        "teaser": null
      },{
        "title": "Git",
        "excerpt":"In this unit, our objective is to set up a ROS package from git. If git is not installed in your Ubuntu system, run in the terminal sudo apt install git Git is a free and open source version control system. Many companies provide servers running such a version control...","categories": [],
        "tags": [],
        "url": "/modules/3/git.html",
        "teaser": null
      },{
        "title": "Assessment for Module 3 - Version control systems",
        "excerpt":"git commands This assignment is to help you self-assess your comprehension on git. Read carefully each question. Once answered, you will receive feedback. Good luck! Q1 A version control system 1. allows for managing software changes over time. 2. checks for errors in the code. 3. is only for storing...","categories": [],
        "tags": [],
        "url": "/modules/3/assessment.html",
        "teaser": null
      },{
        "title": "Build Tool",
        "excerpt":"We have configured ROS and we have seen how to use git to download ROS packages directly from the source. What composes a package? How to build them so that executables and other files are generated? To simplify this process, ROS has adopted specific build tools for enabling wide distribution...","categories": [],
        "tags": [],
        "url": "/modules/4/build-tool.html",
        "teaser": null
      },{
        "title": "Colcon",
        "excerpt":"After having cloned the package, as seen in the previous module, we are ready to get into the building process with colcon. We will highlight the main steps to have the ROS packages usable in the environment. Note that colcon can provide additional tasks, including unit tests. For full details,...","categories": [],
        "tags": [],
        "url": "/modules/4/colcon.html",
        "teaser": null
      },{
        "title": "Custom ROS packages fix",
        "excerpt":"We have discovered how to build a ROS package. However, if we try to run immediately the new simulation roslaunch turtlebot_gazebo turtlebot_world.launch We will find the following error: Resource not found: The following package was not found in &lt;arg default=\"$(find xacro)/xacro '$(find turtlebot_description)/robots/$(arg base)_$(arg stacks)_$(arg 3d_sensor).urdf.xacro'\" name=\"urdf_file\"/&gt;: turtlebot_description ROS path...","categories": [],
        "tags": [],
        "url": "/modules/4/fix.html",
        "teaser": null
      },{
        "title": "Assessment for Module 4 - Building tools",
        "excerpt":"Colcon This assignment is to help you self-assess your comprehension on building tools. Read carefully each question. Once answered, you will receive feedback. Good luck! Q1 A ROS package contains at least (select all that apply): * CMakeLists.txt * package.xml * setup.sh * .bashrc Show Answer Q2 Match the functionalities...","categories": [],
        "tags": [],
        "url": "/modules/4/assessment.html",
        "teaser": null
      },{
        "title": "Simulator with the Waveshare Jetbot of the course",
        "excerpt":"With the basics on Linux, ROS package installation, and git, we can set up a ROS package containing the model and the tools for the Gazebo simulation with the Waveshare Jetbot, the robot used as reference in this curriculum. Here a set of commands that can be run to download...","categories": [],
        "tags": [],
        "url": "/modules/5/waveshare.html",
        "teaser": null
      },]

---
layout: page
title: Problems and solutions
permalink: /problems-and-solutions
nav_order: 9
---

# Problems and solutions

Here you can find common problems and possible solutions.

## Warning: JAVA_HOME environment variable is not set

While running `./mvnw spring-boot:run`, you might see warning `Warning: JAVA_HOME environment variable is not set.` at the top of the command output. [Here's](https://confluence.atlassian.com/doc/setting-the-java_home-variable-in-windows-8895.html) a guide to fix the issue.

On Windows the JDK should be found in the `C:\Program Files\Java` folder. The environment variable value should be in format `C:\Program Files\Java\<jdk-folder-name>`. Once you have created the `JAVA_HOME` environment variable close the Git Bash and open it again.
# Java-Script

## 12 Factor App: - 
is a methodology and practices for building and deploying applications, espacially those designed for the cloud.

## 12 Factors: - 
1. Codebase - 1 codebase per application tracked in version control.

2. Dependencies - Explicitly declare and isolate dependencies.

3. Configuration - store the config in the environment. Source code and configurations must be separated from each other.

4. Backing Services - any service that your application consumes is known as backing services. These servies are treated as resources.

5. Build, Release, and Run - strictly seperate build, release and run stages. 

6. Processes - use of sticky sessions must be avoided. Execute the application as one or more stateless processes(user data should be stored in different cloud platform).

7. Port Binding - It binds itself to a particular port number and listen to all the request hitting on that port.

8. Concurrency - application must be divied into smaller processes instead of single large process. They should start, terminate and replicate independently.

9. Disposability - graceful start and termination of it's processes without affecting the overall application functionality.

10. Dev/Prod Parity - means production and development environment must be as similar as possible. The processes being used, technologies and the infrastructure must be the same.

11. Logs - logs are very essential to understand the internal working of application. We should store all the logs in a single location so that if some error occurs, we can look at that location and find the bug with the help of logs.

12. Admin Processes - Processes that run by the admin must be run in the same environment of the application. It should not affect main servies of the application.

# Atomic design: - 
is a methodology for organizing and structuring the development of user interface in hierarchical, modular, and scalable way.

1. Atoms - smallest fundamental building block such as buttons, icons.

2. Molecules - combining 2 or more atoms to create a functional unit, like a search bar.

3. Organisms - complex grouping of molecules and atoms that represent a distinct section of the interface.

4. Templates - define the layout and structure of a page, incorporate organism, molecules and atoms.

5. Pages - The final stage, where templates are populated with actual content and present the finished design to the user

## Git V/S Github
Git - is a version control system. It is like a tool
Github - is a cloud-based service that uses git. It is like a platform where you store and share your code using git.

## Git config: - 
is a convenience function that is used to set git configuration values on a global or local project level.

## .gitignore: - 
is a file which includes which files we want to exclude from tracking by git. Remain untracked.
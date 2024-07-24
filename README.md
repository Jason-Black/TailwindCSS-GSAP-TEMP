# TailwindCSS-GSAP-TEMP
A working Tailwind/GSAP boiler plate for github cloudspace

# Clone your template repository into a temporary directory
git clone https://github.com/your-username/web-design-company.git temp-template

# Copy all files from the temp-template directory to the current directory
cp -r temp-template/* temp-template/.[!.]* .

# Remove the temporary directory
rm -rf temp-template

# Add and commit the copied files, and push them to your new GitHub repository
git add .
git commit -m "Initial commit for new project"
git push origin main



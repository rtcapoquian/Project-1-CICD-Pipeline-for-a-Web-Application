echo "successfull before_install.sh"
pm2 stop all
pm2 delete all
rm -rf /home/ec2-user/production
echo "removed production folder"
mkdir /home/ec2-user/production
echo "created production folder"
cp -r /home/ec2-user/app /home/ec2-user/production 
echo "copied app to production"
rm -rf /home/ec2-user/app
echo "removed app folder"
mkdir /home/ec2-user/app
echo "created app folder"
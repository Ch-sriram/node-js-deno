# SQL Introduction

You can follow **[this video](https://youtu.be/BDShK0w1zAg)**, or use the following tutorial below.

Install MySQL for ubuntu 18.04 using the steps mentioned below.

```bash
sudo apt update
sudo apt install mysql-server
```

After installing, the `mysql-server` package, you can start it using the following command:

```bash
sudo mysql
```

After installation, you've to change the password for root user, using the following command:

```bash
sudo mysql_secure_installation
```

We can create new Database users with all GRANT privileges as follows:

```sql
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

Now you can login using that new user who's username is `username` as follows:

```bash
sudo mysql -u username -p
(password prompt)
```

## MySQL Workbench Installation

Install the workbench using the following command:

```bash
sudo apt update
sudo apt install mysql-workbench
```

**NOTE**: In case when running the workbench, if you're unable to open the `'root'@'localhost'` instance, then just do the following:

```bash
sudo mysql -u root
```

(mysql terminal opens, and now type in the following)

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
```

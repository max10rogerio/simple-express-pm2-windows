# **SIMPLE-EXPRESS-PM2-WINDOWS**

Create a folder in `C:` -> `C:\PM2`  
Create an env variable in windows `PM2_HOME`
| KEY | VALUE |
| --- | --- |
|  PM2_HOME | `C:\PM2` |

Run: `pm2 save` and check if folder `C:\PM2` has been modified like:
```
- C:\PM2
  -- logs
  -- modules
  -- pids
  -- dump.pm2
  ....
```

Start your apps like this:  
`pm2 start app.js --name=simple-express-pm2-windows`

Run again: `pm2 save`

Verify in `C:\PM2\pids` contains a file with name of your apps
```
- C:\PM2
  -- logs
  -- modules
  -- pids
    -- simple-express-pm2-windows-0.pid
  -- dump.pm2
  ....
```

PS:
If you receive error: EPERM, then run commands in admin prompt

Refs:
- PM2 in Windowns: https://thomasswilliams.github.io/2020/04/07/installing-pm2-windows.html
- Task Schedule Windows: https://stackoverflow.com/a/13173752/7168666
- Error EPERM: https://github.com/Unitech/pm2/issues/2946
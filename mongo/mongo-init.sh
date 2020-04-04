mongo -- "$MONGO_ROOT_USERNAME" <<EOF

 db.createUser({
     user:"$MONGO_USER",
     pwd:"$MONGO_PASSWORD",
     roles:[
         {
             role:"readWrite",db:"$MONGO_DATABASE"
         }
     ]
 })

EOF


const users = [
  {
    name: 'Admin User',
    email: 'admin@admin.com',
    password:'admin123',
    isAdmin: true
  },
  {
    name: 'John Doe',
    email: 'john@email.com',
    password:'john123',
    isAdmin: false
  },
  {
    name: 'Alice Smith',
    email: 'alice@email.com',
    password:'alice123',
    isAdmin: false
  },
  {
    name: 'Eva Brown',
    email: 'eva@email.com',
    password:'eva123',
    isAdmin: false
  },
  {
    name: 'David Miller',
    email: 'david@email.com',
    password:'david123',
    isAdmin: false
  }
];

export default users;


// INSERT INTO user (name, email, password, is_admin) VALUES ('Admin User', 'admin@admin.com', 'admin123', true);
// INSERT INTO user (name, email, password, is_admin) VALUES ('John Doe', 'john@email.com', 'john123', false);
// INSERT INTO user (name, email, password, is_admin) VALUES ('Alice Smith', 'alice@email.com', 'alice123', false);
// INSERT INTO user (name, email, password, is_admin) VALUES ('Eva Brown', 'eva@email.com', 'eva123', false);
// INSERT INTO user (name, email, password, is_admin) VALUES ('David Miller', 'david@email.com', 'david123', false);


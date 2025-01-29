<!-- <?php
  /**
  * Requires the "PHP Email Form" library
  * The "PHP Email Form" library is available only in the pro version of the template
  * The library should be uploaded to: vendor/php-email-form/php-email-form.php
  * For more info and help: https://bootstrapmade.com/php-email-form/
  */

  // Replace contact@example.com with your real receiving email address
  // $receiving_email_address = 'robelg794@gmail.com';

  // if( file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php' )) {
  //   include( $php_email_form );
  // } else {
  //   die( 'Unable to load the "PHP Email Form" Library!');
  // }

  // $contact = new PHP_Email_Form;
  // $contact->ajax = true;
  
  // $contact->to = $receiving_email_address;
  // $contact->from_name = $_POST['name'];
  // $contact->from_email = $_POST['email'];
  // $contact->subject = $_POST['subject'];

  // Uncomment below code if you want to use SMTP to send emails. You need to enter your correct SMTP credentials
  /*
  $contact->smtp = array(
    'host' => 'example.com',
    'username' => 'example',
    'password' => 'pass',
    'port' => '587'
  );
  */

  // $contact->add_message( $_POST['name'], 'From');
  // $contact->add_message( $_POST['email'], 'Email');
  // $contact->add_message( $_POST['message'], 'Message', 10);

  // echo $contact->send();





  
?>






<?php -->
// Database connection settings
// $servername = "localhost"; // Change this if your database is hosted remotely
// $username = "root";        // Your MySQL username
// $password = "";            // Your MySQL password (default is empty in XAMPP)
// $database = "portfolio";   // Database name

// Create a connection to MySQL
// $conn = new mysqli($servername, $username, $password, $database);
// 
// Check if the connection was successful
// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// }

// Check if the form was submitted
// if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve form data
    // $name = trim($_POST['name']);
    // $email = trim($_POST['email']);
    // $subject = trim($_POST['subject']);
    // $message = trim($_POST['message']);

    // Validate inputs
    // if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    //     die("Error: All fields are required!");
    // }

    // if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    //     die("Error: Invalid email format!");
    // }

    // // Prepare an SQL statement to insert data safely
    // $stmt = $conn->prepare("INSERT INTO comment (Name, email, subject, message) VALUES (?, ?, ?, ?)");
    // $stmt->bind_param("ssss", $name, $email, $subject, $message);

    // Execute the query
    // if ($stmt->execute()) {
    //     echo "Success: Your message has been saved!";
    // } else {
    //     echo "Error: " . $stmt->error;
    // }

    // Close the statement and database connection
//     $stmt->close();
//     $conn->close();
// } else {
//     die("Error: Invalid request method!");
// }
// ?>









 -->

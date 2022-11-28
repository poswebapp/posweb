import nodemailer from "nodemailer";

let otp = "";
export const generateOTP = () => {
  for (let i = 0; i <= 3; i++) {
    const randVal = Math.round(Math.random() * 9);
    otp = randVal + otp;
  }
  const output = otp;
  otp = "";
  return output;
};

export const mailTransport = ({ OTP, result }) => {
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "websitepos02@gmail.com",
      pass: "skhzifvkxsgomqlw",
    },
  });

  let mailDetails = {
    from: "websitepos02@gmail.com",
    to: `${result.email}`,
    subject: "OTP",
    html: `<h1>${OTP}</h1>`,
  };

  return mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log("Error Occurs");
    } else {
      console.log("Email sent successfully");
    }
  });
};

export const mailVerified = (email) => {
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "websitepos02@gmail.com",
      pass: "skhzifvkxsgomqlw",
    },
  });

  let mailDetails = {
    user: "websitepos02@gmail.com",
    to: `${email}`,
    subject: "OTP",
    html: `<h1>Email Verified Successfully</h1>`,
  };

  return mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log("Error Occurs");
    } else {
      console.log("Email sent successfully");
    }
  });
};

export const mailPassReset = (email) => {
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "websitepos02@gmail.com",
      pass: "skhzifvkxsgomqlw",
    },
  });

  let mailDetails = {
    from: "olsencortuna@gmail.com",
    to: `${email}`,
    subject: "Reset Ok",
    html: `<h1>Email Password Reset Successfully</h1>`,
  };

  return mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log("Error Occurs");
    } else {
      console.log("Email sent successfully");
    }
  });
};
import { createTransport } from "nodemailer";
import { AppError } from "../error";
import Mailgen from "mailgen";

interface IEmailRequest {
	to: string;
	subject: string;
	text: string;
}

const sendEmail = async ({ to, subject, text }: IEmailRequest) => {
	const transporter = createTransport({
		host: "smtp.gmail.com",
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS,
		},
	});

	await transporter
		.sendMail({
			from: "pethersonreis@gmail.com",
			to,
			subject,
			text: "test",
		})
		.then(() => {
			console.log("Email enviado");
		})
		.catch((err) => {
			console.log(err);
			throw new AppError("Erro ao enviar o email", 500);
		});
};

const resetPasswordTemplate = (
	userName: string,
	userEmail: string,
	resetToken: string
) => {
	const mailGenerator = new Mailgen({
		theme: "default",
		product: {
			name: "texte",
			link: "http://localhost:3000/users",
		},
	});
	const email = {
		body: {
			name: userName,
			intro:
				"You have received this email because a password reset request for your account was received.",
			action: {
				instructions: "Click the button below to reset your password:",
				button: {
					color: "#DC4D2F",
					text: "Reset your password",
					link: `http://localhost:3000/resetPassword/${resetToken}`,
				},
			},
			outro:
				"Need help, or have questions? Just reply to this email, we'd love to help.",
		},
	};

	const emailBody = mailGenerator.generate(email);
	const emailTemplate = {
		to: userEmail,
		subject: "Reset password",
		text: emailBody,
	};

	return emailTemplate;
};

export { sendEmail, resetPasswordTemplate };

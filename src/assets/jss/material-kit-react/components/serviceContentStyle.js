import { primaryColor, navyColor } from "assets/jss/material-kit-react.js";

const serviceContentStyle = (theme) => ({
	wrapper: {
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "space-between",
		gap: "40px",
		textAlign: "left",
		padding: "0 4px",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
			gap: "24px",
		},
	},
	text: {
		flex: "1 1 55%",
		minWidth: 0,
		maxWidth: "68ch",
	},
	paragraph: {
		fontSize: "1rem",
		lineHeight: "1.65em",
		color: "#374151",
		margin: "0 0 14px",
	},
	list: {
		margin: "18px 0",
		paddingLeft: "0",
		listStyle: "none",
	},
	listItem: {
		position: "relative",
		fontSize: "1rem",
		lineHeight: "1.55em",
		color: "#374151",
		padding: "8px 0 8px 22px",
		borderBottom: "1px solid #eef0f4",
		"&:last-child": {
			borderBottom: "0",
		},
		"&:before": {
			content: '""',
			position: "absolute",
			left: 0,
			top: "1.05em",
			width: "8px",
			height: "8px",
			borderRadius: "2px",
			backgroundColor: primaryColor,
		},
	},
	norms: {
		display: "flex",
		flexWrap: "wrap",
		alignItems: "center",
		gap: "8px",
		marginTop: "22px",
	},
	normsLabel: {
		fontSize: "12px",
		fontWeight: "600",
		letterSpacing: "0.06em",
		textTransform: "uppercase",
		color: "#6b7280",
		marginRight: "4px",
	},
	chip: {
		fontSize: "13px",
		fontWeight: "500",
		color: navyColor,
		backgroundColor: "#eef1fb",
		border: "1px solid #d9dffa",
		borderRadius: "4px",
		padding: "3px 10px",
	},
	media: {
		flex: "1 1 40%",
		minWidth: 0,
		width: "100%",
	},
	image: {
		display: "block",
		width: "100%",
		maxWidth: "100%",
		height: "auto",
		borderRadius: "4px",
		border: "1px solid #e5e8ef",
	},
});

export default serviceContentStyle;

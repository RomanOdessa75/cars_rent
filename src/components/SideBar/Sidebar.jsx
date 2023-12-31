import css from "./Sidebar.module.css";
import React, { useState } from "react";
import Select from "react-select";

export const Sidebar = () => {
	const [minMileage, setMinMileage] = useState("");
	const [maxMileage, setMaxMileage] = useState("");
	let filters = {};

	const handleSubmitForm = e => {
		e.preventDefault();
		filters.min = minMileage;
		filters.max = maxMileage;
		setMaxMileage("");
		setMinMileage("");
	};

	const brandOptions = [
		{ value: "buick", label: "Buick" },
		{ value: "volvo", label: "Volvo" },
		{ value: "hummer", label: "HUMMER" },
		{ value: "subaru", label: "Subaru" },
		{ value: "mitsubishi", label: "Mitsubishi" },
		{ value: "nissan", label: "Nissan" },
		{ value: "lincoln", label: "Lincoln" },
		{ value: "gmc", label: "GMC" },
		{ value: "hyundai", label: "Hyundai" },
		{ value: "mini", label: "MINI" },
		{ value: "bentley", label: "Bentley" },
		{ value: "aston-martin", label: "Aston Martin" },
		{ value: "pontiac", label: "Pontiac" },
		{ value: "lamborghini", label: "Lamborghini" },
		{ value: "audi", label: "Audi" },
		{ value: "bmw", label: "BMW" },
		{ value: "chevrolet", label: "Chevrolet" },
		{ value: "mercedes-Benz", label: "Mercedes-Benz" },
		{ value: "chrysler", label: "Chrysler" },
		{ value: "kia", label: "Kia" },
		{ value: "land", label: "Land" },
		{ value: "lexus", label: "Lexus" },
		{ value: "toyota", label: "Toyota" },
		{ value: "acura", label: "Acura" },
	];

	const priceOptions = [
		{ value: "30", label: "30" },
		{ value: "40", label: "40" },
		{ value: "50", label: "50" },
		{ value: "60", label: "60" },
		{ value: "70", label: "70" },
		{ value: "80", label: "80" },
		{ value: "90", label: "90" },
		{ value: "100", label: "100" },
		{ value: "150", label: "150" },
		{ value: "200", label: "200" },
		{ value: "250", label: "250" },
		{ value: "300", label: "300" },
		{ value: "350", label: "350" },
		{ value: "400", label: "400" },
		{ value: "500", label: "500" },
	];

	const selectStyles = {
		control: styles => ({
			borderRadius: "14px",
			backgroundColor: "#f7f7fb",
			height: "48px",
			display: "flex",
			padding: "0",
			paddingLeft: "10px",
			paddingRight: "18px",
			borderRight: "none",
			color: "#121417",
			fontSize: "18px",
			fontWeight: "500",
			lineHeight: "1.11",
		}),
		option: (styles, { isFocused }) => {
			return {
				...styles,
				backgroundColor: "transparent",
				color: isFocused ? "#121417" : "rgba(18, 20, 23, 0.20)",
				fontSize: "16px",
				fontWeight: "500",
				lineHeight: "1.25",
				cursor: "pointer",
				paddingLeft: "0",
				paddingRight: "0",
				paddingTop: "4px",
				paddingBottom: "4px",
			};
		},
		placeholder: defaultStyles => {
			return {
				...defaultStyles,
				color: "#121417",
			};
		},
		dropdownIndicator: (provided, state) => ({
			...provided,
			svg: {
				fill: "#121417",
			},
			transition: "transform 250ms linear",
			transform: state.isFocused ? "rotate(180deg)" : null,
		}),
		menu: provided => ({
			...provided,
			borderRadius: "10px",
			paddingLeft: "18px",
			paddingTop: "10px",
			paddingBottom: "18px",
			paddingRight: "8px",
		}),
		menuList: provided => ({
			...provided,
			color: "red",
		}),
	};

	return (
		<div className={css.container}>
			<form
				className={css.form}
				onSubmit={handleSubmitForm}
			>
				<div>
					<p className={css.selectTitle}>Car brand</p>
					<Select
						maxMenuHeight={272}
						className={css.selectBrandField}
						placeholder="Enter the text"
						options={brandOptions}
						styles={selectStyles}
						components={{
							IndicatorSeparator: () => null,
						}}
					/>
				</div>
				<div>
					<p className={css.selectTitle}>Price / 1 hour</p>
					<Select
						maxMenuHeight={188}
						className={css.selectPriceField}
						placeholder="To $"
						options={priceOptions}
						styles={selectStyles}
						components={{
							IndicatorSeparator: () => null,
						}}
					/>
				</div>
				<div>
					<p className={css.selectTitle}>Car mileage / km</p>
					<div className={css.inputWrap}>
						<label className={css.inputLabel}>
							<p className={css.inputTitle}>From</p>
							<input
								onChange={e => setMinMileage(e.target.value)}
								value={minMileage}
								className={css.inputFrom}
								type="text"
								pattern="[0-9]+"
								title="Only digits provided"
							/>
						</label>
						<label className={css.inputLabel}>
							<p className={css.inputTitle}>To</p>
							<input
								onChange={e => setMaxMileage(e.target.value)}
								value={maxMileage}
								className={css.inputTo}
								type="text"
								pattern="[0-9]+"
								title="Only digits provided"
							/>
						</label>
					</div>
				</div>
				<button
					className={css.searchBtn}
					type="submit"
				>
					Search
				</button>
			</form>
		</div>
	);
};

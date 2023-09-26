import { Table } from "@mui/material";
import { FooterCard } from "./footerCard";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "Internship in India",
    "Internship in India",
    "Internship in India",
    "Internship in India",
    "Internship in India"
  ),
  createData(
    "Internship in Delhi",
    "Internship in India",
    "Internship in India",
    "Internship in India",
    "Internship in India",
    "Internship in India"
  ),
  createData(
    "Internship in Banglore",
    "Internship in India",
    "Internship in India",
    "Internship in India",
    "Internship in India",
    "Internship in India"
  ),
  createData(
    "Internship in Mumbai",
    "Internship in India",
    "Internship in India",
    "Internship in India",
    "Internship in India",
    "Internship in India"
  ),
  createData(
    "Internship in Hydrabad",
    "Internship in India",
    "Internship in India",
    "Internship in India",
    "Internship in India",
    "Internship in India",
    "Internship in India"
  ),
  createData(
    "Internship in Chennai",
    "Internship in India",
    "Internship in India",
    "Internship in India",
    "Internship in India"
  ),
  createData(
    "Internship in Gurgaon",
    "Internship in India",
    "Internship in India",
    "Internship in India",
    "Internship in India",
    "Internship in India"
  ),
  createData(
    "Internship in Kolkata",
    "Internship in India",
    "Internship in India",
    "Internship in India",
    "Internship in India",
    "Internship in India"
  ),
  createData(
    "Virtual internship",
    "Internship in India",
    "Internship in India",
    "Internship in India",
    "Internship in India",
    "Internship in India"
  ),
  createData(
    "View all internships",
    "Internship in India",
    "Internship in India",
    "Internship in India",
    "Internship in India",
    "Internship in India"
  ),
];

export default function FooterPage() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="bg-gray-700 p-4 ">
      <footer>
        <Table>
          <thead>
            <tr className="bg-gray-700  text-white">
              <th className="bg-gray-700 text-white">Internship by places</th>
              <th className="bg-gray-700 text-white">Internship by Stream</th>
              <th className="bg-gray-700 text-white">Jobs by Places</th>
              <th className="bg-gray-700 text-white">Jobs by Stream</th>
              <th className="bg-gray-700 text-white">Online Trainings</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name} className="bg-gray-700">
                <td className="bg-gray-700 text-white">
                  <a href="#">{row.name}</a>
                </td>
                <td className="bg-gray-700 text-white">
                  <a href="#">{row.calories}</a>
                </td>
                <td className="bg-gray-700 text-white">
                  <a href="#">{row.fat}</a>
                </td>
                <td className="bg-gray-700 text-white">
                  <a href="#">{row.carbs}</a>
                </td>
                <td className="bg-gray-700 text-white">
                  <a href="#">{row.protein}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </footer>
      <hr className="my-5 bg-white" />
      <div>
        <FooterCard />
      </div>
      <div className="flex justify-end py-5 text-white">
        &copy; {year} Your Company. All rights reserved.
      </div>
    </div>
  );
}

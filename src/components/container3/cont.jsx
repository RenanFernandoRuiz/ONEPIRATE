import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

import style from "./cont.module.css";



const Cont = () => {
  const images = [
    {
      url: "https://s3-alpha-sig.figma.com/img/a2ab/026c/47e3621ae75f46343a87658c50a89e2a?Expires=1701648000&Signature=Cg3xHzIq54DdYzi7u7mnvzKzbSpvFGHwkqWl9SPW3Vy-Ve-CryNYmz8XE28OzFPBAdaxGZPsmx1f6Fmfgz2CqcTwVcg~KZfsed8Uza1TZaLOW~tlQWaiZ09bEdGkzcZMMs3GlTdQjIXIAEnkv9dFtidZJKeeYCXVx1kUIvhklarPSMQHYTrysmC9Qbgpth1s5UwaMoSqSyWmnM32U7fqZ~SR45LEbRmm83NDToYHGoXQ~n0CePJnwfkWVpt6VuvU9FEaRASU8tf19FDyhBY6TWQ6TrOkwr-MvZFlAqOY-UeIV~KLpKTLc8Q5ghnXjr0K3CnXfkCUbo-qmZtE11wlEg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "SNORKELING",
      width: "35%",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/2c2c/3bba/c4d3fe70d68bd2b55c3af118b1ee3e98?Expires=1701648000&Signature=EDK5QEPZtbB0UIVxlGvCvFfu2lDxGv07NDCbRlttMYAbmPaD5oxG6b7mkPrIhMIvkLNMwXQQiwg1xjQDjqRLJM4hoVbMQ~3HHGVQrSr1j1WCjbJuhlKDzrd6tBFz4xz8ywYvTNE9NjkD5SN69xEuTs23qxquO5xcbps3fRAyMHunEJlkrAqGyrZO2KQBoL~HjGGQQ~XO08EwMxdbxFXtt-UNtLJ0QtVQOYlTq~K8rYGEW8CJDJdgPfqIiIO1NPjk0EiME6Gz3fozZrV9od1Xws6JzD4Td52pFdTqjTm2kWZrh0uCcwmicQQnXbvB6-zbfXSFz4CVnyFf-SASURhtbw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "MASSAGE",
      width: "25%",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/c351/7133/add1ae2b2119d90ae45a604568e9b10b?Expires=1701648000&Signature=lJyWXgumUL8khF27mzlwYrrD2ffs8dLDePfjoboU0mis3XfTfRszE-HE357n8Ajm8hwr6lVmEkhZsEw0cbl-u5q02niNbCZiGqXh01F0G~9LWJBM7gdRRWFpZY5bRnan307Drg3X91DDeLL16AxZkaiWDoI50gyqq63DwleFWRaRKPApyau-Mh3AD6hC4FHEMmR0SnqmdlYDI7NWzJ1CxcleV47LbBbckQO1hN2szZxdy8LVYVKY9O0i7rTxVZfpt-EOX2m-70CCLKnsuO2C98XuA-kM8W3g9snax~nu1jjaadleHYXd9rL66ckSnzZHiml024G8kcoPkXrfEqJtRQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "HIKING",
      width: "30%",
    },
    {
        url: "https://s3-alpha-sig.figma.com/img/8418/1a50/4e3b05cf6002fd9b127f811a8a407432?Expires=1701648000&Signature=KLQJJjb4pTTuVloZdNF67JDXUUgiojz9FW9dcDzfpldWGczVqWvRwNhwo31jo4ZW25ZDFY-sSrXlDg~hcuPbo9uoBywtnAwk-mMW86WICBLzyLf7wtOaXEjipf7XEeJJU6elUNPooHUd9xJCeeCg9~Uhe3XybZ475tmwZIWr3pCoqDVrscdGJXgreFCe8DrBBKrOH4k8t2xEetY3Qrag4Purg4f2NC4dHaXS90g2hI7oMczJuRMUhmRpxf-Gg9bzHubtO-051Zp9naoAgIyGeW8gIcE9veJZz0G1X3dvqFXqKP7yPF0nAUGOv6lwT5KHTauIyFJbrCeT3kwawx~-SQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        title: "TOUR",
        width: "30%",
    },
    {
        url: "https://s3-alpha-sig.figma.com/img/9854/82aa/34e6bbe1f5e03c80bc572627e56a142a?Expires=1701648000&Signature=qMfOuiqRDanvkv3dcf39eCpodeMwRweYZhId2QHN4-Ym6kAiiGl6uwebxBcfOCGwizek~nPrxvCtvYTGTTcjr~hj0NaESatz7XcdGMVj7~NBO~2b3IE93eb6kBJS9mX1Xdds-8DL3LjLieG3~dTFUykOWsAAHKoEZaPod2VhaeilTP6RUnDr~0x5Ov1ZUMjFmgOekWJrZq7HKIML05gWglgpz0yGXGfeGiA99hsKGx~NUvIv-uBP0iZLdePaVtQnxP7bz4lwcQ~1M1vxYqKpTPGr1KKRZrmOarU31UGSMJEx~PyBuJthW1gIKhePKLey8-L4N4A6nnpc6kyiQimeOg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        title: "GASTRONOMY",
        width: "30%",
    },
    {
        url: "https://s3-alpha-sig.figma.com/img/39e6/ce68/84bcbbf52634816808270ba4ed8d389a?Expires=1701648000&Signature=EmlSjasPoNuoauy3PY3zBGjE3vu3TS9DCEzii6aP590JuBA2bBWGITN-XN~J-zWvGGP3raEk1bwxf6SnyJJHEnFcsGKoAFr0aVzUCOoJLJF79FP3-1zDOdXEhvnrYiXFcw5peTkMXu0XAe3gZxfMlTHC5HdLKPfgB2qiunGBbxvxPzgVianf8MHRC9JyaqM6yR4qlgZdpJQeKEacGkBDOyoALrf8HOWsXXeEqFqOXuKl18oHGHxTU7Xe7xxEe10shj4t0RNjJoYsZqIkWH5tScx2WP6eypw5BB6dwakhTjaKXkOc9wrrW75NJcCGcxgZ-abKmamjGb5tJiV6nl3OmQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        title: "SHOPPING",
        width: "30%",
    },
    {
        url: "https://s3-alpha-sig.figma.com/img/d886/680a/d9c74b7528897a001647d83aa3f14850?Expires=1701648000&Signature=l9PuBlac~vrB9rcwyTPi6olWhaJYw4m789cFzv4By4IzBtONoT5cbDrP4cJklYBFUglliTrcJZKo12hI-7tjIr6Ym2QZT8Scec~zAxJZZsHWHaK1~GlTrMxCDbRkv3grVX0AJrp3~CkoY6S1GTseOp6TM4sdny2KrNpKhoqgr4x1hQKmsFgnW2NR1TdzU3hqyFYZP4IYjfYxzzAyBMHqv3h7hw2-jMy~TY9UYZ4LSwc630fqk~qgZ7mJYpHqn478lWxQ2ao4OrEuO6lVs4AXUi4F1ohQBZPy4pDD9lkTW-7WEEMZ9kNOlmFYRwVOR~4bpaHglYKD8WDtllwKJowrYA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        title: "WALKING",
        width: "30%",
    },
    {
        url: "https://s3-alpha-sig.figma.com/img/edbb/7dbf/8da70cbdac532dbc8b656fa27a95ccb2?Expires=1701648000&Signature=qtoQXv~Ldh0JJn2cK98nLwoI2saKvF70XAzfsSNZlPq~UglK-sGP~SMIjEBnKcvx~Yd5wcfDi4ZQadNDaNMKvAFsIt39YJEnkWShowe89UR~pc0y3Kl5nRbsCuLwNK4VM78e36de2nFFNOnws3YsjMoGqCfkKTLdwPQvAWKzyQ8roNDuPYDNO-iBzv6i57zaArF4qZ5Q40rq5FiNHBRzfqIwZEVVPaoRtEBHIyCN5R70ReGqBvRgKTBZ78iMhGK~r5GWwlwfSoDq4mQACq84MJ1Bp5n2uz7h5t1b4mjYqMjo-1GbiHKWWin~oYNxPC5YsfL21GRqSS7IVAObS0snjw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "FITNESS",
      width: "25%",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/45b9/67c4/5f19bd735547248a87bdffdfac3600d1?Expires=1701648000&Signature=D6eoKdI1lJCwxocpG~86C~wl1TD9KSQ~yex8RDcXDFvzkdf5Q7VpJAzj4RV3Cpxq-GAov7F6szaZ5JNDzA~jPTp8-5-ZczEV9Lzf-8l3e1FDo8uenYubUxNIgkDUpVKsINpoVUsHjAb0BcACKB7k6Ko4N3dgC8N67VBrrD1UBy~Q4fVAMb8OOkVz2FW8ZDpcs8LeEp-KvNRnG1QCzg-Hgd-mEXd57DuVsKKU2B~OBFbswQwHflCAIWPwTOx075D8SSiSCtAWYMZtXPQ8buvMgzoQ6fvQwIzFzSifARJs0bHSafT2s25Vpb2SjIU6lFYVuvqS00rLXBVV6RiLYJV0FA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "READING",
      width: "35%",
    },
  ];

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",
    height: 200,
    [theme.breakpoints.down("sm")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &.Mui-focusVisible": {
      zIndex: 1,
      "& .MuiImageBackdrop-root": {
        opacity: 0.15,
      },
      "& .MuiImageMarked-root": {
        opacity: 0,
      },
      "& .MuiTypography-root": {
        border: "4px solid currentColor",
      },
    },
  }));

  const ImageSrc = styled("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 50%",
    
  });

  const Image = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  }));

  const ImageBackdrop = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  }));

  const ImageMarked = styled("span")(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  }));

  return (
    <div className={style.cont}>
      <div>
        <Typography
          sx={{
            fontFamily: "Roboto Condensed",
            fontSize: "36px",
            fontWeight: "700",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0em 0em 1em 0em",
            marginTop:"1em"
          }}
        >
          For all tastes and all desires
        </Typography>
      </div>
      <Box
        sx={{ display: "flex", flexWrap: "wrap", justifySelf:"center", width: "50%",marginLeft:63, marginBottom:2}}
      >
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <div></div>
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        ))}
      </Box>
    </div>
  );
};

export default Cont;
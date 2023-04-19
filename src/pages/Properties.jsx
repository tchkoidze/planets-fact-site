function Properties() {
  <NavBar>
    <PlanetList>
      {data.map((e) => (
        <PlanetListItem key={e.name}>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: e.color,
                borderRadius: "50%",
              }}
            ></div>
            <Link
              to={"/" + e.name}
              style={{
                textDecoration: "none",
                color: "#fff",
                fontFamily: "League Spartan",
                fontWeight: 700,
                fontSize: "15px",
                lineLeight: "25px",
                letterSpacing: "1.36364px",
                textTransform: "uppercase",
              }}
            >
              {e["name"]}{" "}
            </Link>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
            <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
          </svg>
        </PlanetListItem>

        //<li key={e["name"]}>{e["name"]}</li>
      ))}
    </PlanetList>
  </NavBar>;
}

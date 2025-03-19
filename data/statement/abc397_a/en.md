Score : $100$ points

## Problem Statement

Takahashi measured his body temperature and found it to be $X$ ${}^\circ$C.

Body temperature is classified into the following:

- Higher than or equal to $38.0$ ${}^\circ$C: “High fever”
- Higher than or equal to $37.5$ ${}^\circ$C and lower than $38.0$ ${}^\circ$C: “Fever”
- Lower than $37.5$ ${}^\circ$C: “Normal”

Which classification does Takahashi's body temperature fall into? Present the answer as an integer according to the Output section.

## Constraints

- $30 \leq X \leq 50$
- $X$ is given to one decimal place.

## Input

The input is given from Standard Input in the following format:

> $X$

## Output

Print an integer specified below corresponding to Takahashi's body temperature classification.

- High fever: $1$
- Fever: $2$
- Normal: $3$

```input1
40.0
```

```output1
1
```

His body temperature is $40.0$ ${}^\circ$C, which is classified as a high fever. Thus, print $1$.

```input2
37.7
```

```output2
2
```

His body temperature is $37.7$ ${}^\circ$C, which is classified as a fever. Thus, print $2$.

```input3
36.6
```

```output3
3
```

His body temperature is $36.6$ ${}^\circ$C, which is classified as a normal temperature. Thus, print $3$.
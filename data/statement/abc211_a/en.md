Score : $100$ points

## Problem Statement

You are given a person's systolic blood pressure, $A$, and diastolic blood pressure, $B$.<br>
Find the mean arterial pressure, $C$, which we define as follows:

- $C = \frac{A-B}{3} +B$.

## Constraints

- $50 \leq B \leq A \leq 300$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$

## Output

Print the value $C$.<br>
Your output is considered correct when its absolute or relative error from our answer is at most $10^{-5}$.

```input1
130 100
```

```output1
110
```

We have $C = \frac{130-100}{3} +100 = 10 + 100 = 110$.

```input2
300 50
```

```output2
133.3333333
```

Note that although all the values in input are integers, the value to output may not be an integer.

```input3
123 123
```

```output3
123
```
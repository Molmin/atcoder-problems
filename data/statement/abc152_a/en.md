Score : $100$ points

## Problem Statement

Takahashi is participating in a programming contest, AXC001. He has just submitted his code to Problem A.<br>
The problem has $N$ test cases, all of which must be passed to get an AC verdict.<br>
Takahashi's submission has passed $M$ cases out of the $N$ test cases.<br>
Determine whether Takahashi's submission gets an AC.

## Constraints

- $1 \leq N \leq 100$
- $0 \leq M \leq N$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$

## Output

If Takahashi's submission gets an AC, print `Yes`; otherwise, print `No`.

```input1
3 3
```

```output1
Yes
```

All three test cases have been passed, so his submission gets an AC.

```input2
3 2
```

```output2
No
```

Only two out of the three test cases have been passed, so his submission does not get an AC.

```input3
1 1
```

```output3
Yes
```
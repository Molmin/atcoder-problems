Score : $100$ points

## Problem Statement

A basketball game is being played, and the score is now $X$-$Y$. Here, it is guaranteed that $X \neq Y$.<br>
Can the team which is behind turn the tables with a successful three-point goal?<br>
In other words, if the team which is behind earns three points, will its score become strictly greater than that of the other team?  

## Constraints

- $0 \le X \le 100$
- $0 \le Y \le 100$
- $X \neq Y$
- $X$ and $Y$ are integers.

## Input

Input is given from Standard Input in the following format:

> $X$ $Y$

## Output

If the team which is behind can turn the tables with a successful three-point goal, print `Yes`; otherwise, print `No`.

```input1
3 5
```

```output1
Yes
```

The team with $3$ points is behind.<br>
After a successful $3$-point goal, it will have $6$ points, which is greater than that of the other team - $5$.<br>
Thus, we should print `Yes`.

```input2
16 2
```

```output2
No
```

The gap is too much. The team which is behind cannot overtake the other by getting $3$ points.  

```input3
12 15
```

```output3
No
```

A $3$-point goal will tie the score but not turn the tables.
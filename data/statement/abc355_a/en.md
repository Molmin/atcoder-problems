Score : $100$ points

## Problem Statement

Takahashi's cake has been eaten by someone. There are three suspects: person $1$, person $2$, and person $3$.

There are two witnesses, Ringo and Snuke. Ringo remembers that person $A$ is not the culprit, and Snuke remembers that person $B$ is not the culprit.

Determine if the culprit can be uniquely identified based on the memories of the two witnesses. If the culprit can be identified, print the person's number.

## Constraints

- $1 \leq A, B \leq 3$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $A$ $B$

## Output

If the culprit can be uniquely identified based on the memories of the two witnesses, print the person's number; otherwise, print `-1`.

```input1
1 2
```

```output1
3
```

From the memories of the two witnesses, it can be determined that person $3$ is the culprit.

```input2
1 1
```

```output2
-1
```

From the memories of the two witnesses, it cannot be determined whether person $2$ or person $3$ is the culprit. Therefore, print `-1`.

```input3
3 1
```

```output3
2
```
Score : $200$ points

## Problem Statement

There are some animals in a garden. Each of them is a crane with two legs or a turtle with four legs.

Takahashi says: "there are $X$ animals in total in the garden, and they have $Y$ legs in total." Determine whether there is a combination of numbers of cranes and turtles in which this statement is correct.

## Constraints

- $1 \leq X \leq 100$
- $1 \leq Y \leq 100$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $X$ $Y$

## Output

If there is a combination of numbers of cranes and turtles in which the statement is correct, print `Yes`; otherwise, print `No`.

```input1
3 8
```

```output1
Yes
```

The statement "there are $3$ animals in total in the garden, and they have $8$ legs in total" is correct if there are two cranes and one turtle. Thus, there is a combination of numbers of cranes and turtles in which the statement is correct.

```input2
2 100
```

```output2
No
```

There is no combination of numbers of cranes and turtles in which this statement is correct.

```input3
1 2
```

```output3
Yes
```

We also consider the case in which there are only cranes or only turtles.
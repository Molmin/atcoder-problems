Score : $600$ points

## Problem Statement

We have a grid with $3$ horizontal rows and $3$ vertical columns. Let $(i, j)$ denote the square at the $i$-th row from the top and $j$-th column from the left. $(i, j)$ contains $A_{i,j}$ cans of cat food.

Snuke is now on $(1,1)$. He will repeat the following action.

- Consume one can on the square he is on, and move up, down, left, or right to an adjacent square.

When there is no more can on the square he is on, he will end this process.

Is it possible that all of the conditions below are satisfied at the end of the process? If it is possible, show one sequence of actions that make it happen.

- Snuke is at $(1,1)$.
- There is no more can on every square.

## Constraints

- $1 \leq A_{i,j} \leq 100$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $A_{1,1}$ $A_{1,2}$ $A_{1,3}$
> 
> $A_{2,1}$ $A_{2,2}$ $A_{2,3}$
> 
> $A_{3,1}$ $A_{3,2}$ $A_{3,3}$

## Output

If it is impossible that the conditions are satisfied, print `NO`.

If it is possible, print a string $S$ consisting of `L`, `R`, `U`, `D`. The $i$-th character of $S$ should represent the $i$-th action of Snuke, where `L`, `R`, `U`, `D` means moving one square left, right, up, down, respectively.

```input1
1 1 1
1 1 1
1 2 1
```

```output1
DDRUDRUULL
```

Note that Snuke must be back on $(1, 1)$ in the end.

There are also other correct outputs, such as `RRDDLUDLUU`.

```input2
2 4 2
2 1 1
1 1 2
```

```output2
NO
```

It is impossible to achieve the objective, so print `NO`.

```input3
2 2 3
2 1 2
1 3 2
```

```output3
DUDDRUDRLRUULRDULL
```
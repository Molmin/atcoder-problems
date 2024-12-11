Score : $400$ points

## Problem Statement

We have $R$ red balls, $G$ green balls, and $B$ blue balls.
You can do the following operation any number of times:

- choose two balls of different colors and turn them into two balls of the remaining color.

For example, you can choose a red ball and a blue ball and turn them into two green balls.

Your objective is to make all balls have the same color.
Determine whether this objective is achievable. If it is, find the minimum number of operations required to achieve it.

For each input file, solve $T$ test cases.

## Constraints

- $1 \leq T \leq 100$
- $1 \leq R,G,B \leq 10^8$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $T$
> 
> $case_1$
> 
> $case_2$
> 
> $\vdots$
> 
> $case_T$

Each case is in the following format:

> $R$ $G$ $B$

## Output

For each case, print `-1` if the objective is unachievable; otherwise, print the minimum number of operations to achieve it.

```input1
3
1 2 2
1 2 3
1 2 4
```

```output1
2
-1
4
```

For example, in $case_3$, one optimal sequence of operations is:

- choose a green ball and blue ball, turning them into two red balls;
- choose a red ball and blue ball, turning them into two green balls;
- choose a red ball and blue ball, turning them into two green balls;
- choose a red ball and blue ball, turning them into two green balls.
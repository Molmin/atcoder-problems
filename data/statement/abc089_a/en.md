Score : $100$ points

## Problem Statement

There are $N$ students in a school.

We will divide these students into some groups, and in each group they will discuss some themes.

You think that groups consisting of two or less students cannot have an effective discussion, so you want to have as many groups consisting of three or more students as possible.

Divide the students so that the number of groups consisting of three or more students is maximized.

## Constraints

- $1 \leq N \leq 1000$
- All input values are integers.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

If you can form at most $x$ groups consisting of three or more students, print $x$.

```input1
8
```

```output1
2
```

For example, you can form a group of three students and another of five students.

```input2
2
```

```output2
0
```

Sometimes you cannot form any group consisting of three or more students, regardless of how you divide the students.

```input3
9
```

```output3
3
```
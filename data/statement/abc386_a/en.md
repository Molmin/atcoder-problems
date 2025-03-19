Score : $100$ points

## Problem Statement

There are four cards with integers $A,B,C,D$ written on them.<br>
Determine whether a Full House can be formed by adding one card.

A set of five cards is called a Full House if and only if the following condition is satisfied:

- For two distinct integers $x$ and $y$, there are three cards with $x$ written on them and two cards with $y$ written on them.

## Constraints

- All input values are integers.
- $1 \le A,B,C,D \le 13$

## Input

The input is given from Standard Input in the following format:

> $A$ $B$ $C$ $D$

## Output

If adding one card can form a Full House, print `Yes`; otherwise, print `No`.

```input1
7 7 7 1
```

```output1
Yes
```

Adding $1$ to $7,7,7,1$ forms a Full House.

```input2
13 12 11 10
```

```output2
No
```

Adding anything to $13,12,11,10$ does not form a Full House.

```input3
3 3 5 5
```

```output3
Yes
```

Adding $3,3,5,5$ to $3$ forms a Full House.<br>
Also, adding $5$ forms a Full House.

```input4
8 8 8 8
```

```output4
No
```

Adding anything to $8,8,8,8$ does not form a Full House.<br>
Note that five identical cards do not form a Full House.

```input5
1 3 4 1
```

```output5
No
```
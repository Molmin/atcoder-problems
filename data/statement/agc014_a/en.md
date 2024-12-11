Score : $300$ points

## Problem Statement

Takahashi, Aoki and Snuke love cookies. They have $A$, $B$ and $C$ cookies, respectively. Now, they will exchange those cookies by repeating the action below:

- Each person simultaneously divides his cookies in half and gives one half to each of the other two persons.

This action will be repeated until there is a person with odd number of cookies in hand.

How many times will they repeat this action?
Note that the answer may not be finite.

## Constraints

- $1 \leq A,B,C \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $C$

## Output

Print the number of times the action will be performed by the three people, if this number is finite.
If it is infinite, print `-1` instead.

```input1
4 12 20
```

```output1
3
```

Initially, Takahashi, Aoki and Snuke have $4$, $12$ and $20$ cookies. Then,

- After the first action, they have $16$, $12$ and $8$.
- After the second action, they have $10$, $12$ and $14$.
- After the third action, they have $13$, $12$ and $11$.

Now, Takahashi and Snuke have odd number of cookies, and therefore the answer is $3$.

```input2
14 14 14
```

```output2
-1
```

```input3
454 414 444
```

```output3
1
```
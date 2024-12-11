Score : $200$ points

## Problem Statement

There are $K$ pieces of cakes.
Mr. Takahashi would like to eat one cake per day, taking $K$ days to eat them all.

There are $T$ types of cake, and the number of the cakes of type $i$ ($1 \leq i \leq T$) is $a_i$.  

Eating the same type of cake two days in a row would be no fun,
so Mr. Takahashi would like to decide the order for eating cakes that minimizes the number of days on which he has to eat the same type of cake as the day before.  

Compute the minimum number of days on which the same type of cake as the previous day will be eaten.

## Constraints

- $1 \leq K \leq 10000$
- $1 \leq T \leq 100$
- $1 \leq a_i \leq 100$
- $a_1 + a_2 + ... + a_T = K$

## Input

The input is given from Standard Input in the following format:

> $K$ $T$
> 
> $a_1$ $a_2$ $...$ $a_T$

## Output

Print the minimum number of days on which the same type of cake as the previous day will be eaten.

```input1
7 3
3 2 2
```

```output1
0
```

For example, if Mr. Takahashi eats cakes in the order of $2, 1, 2, 3, 1, 3, 1$, he can avoid eating the same type of cake as the previous day.

```input2
6 3
1 4 1
```

```output2
1
```

There are $6$ cakes.
For example, if Mr. Takahashi eats cakes in the order of $2, 3, 2, 2, 1, 2$, he has to eat the same type of cake (i.e., type $2$) as the previous day only on the fourth day.
Since this is the minimum number, the answer is $1$.

```input3
100 1
100
```

```output3
99
```

Since Mr. Takahashi has only one type of cake, he has no choice but to eat the same type of cake as the previous day from the second day and after.
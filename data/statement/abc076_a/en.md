Score : $100$ points

## Problem Statement

Takahashi is a user of a site that hosts programming contests.<br>
When a user competes in a contest, the *rating* of the user (not necessarily an integer) changes according to the *performance* of the user, as follows:  

- Let the current rating of the user be $a$.
- Suppose that the performance of the user in the contest is $b$.
- Then, the new rating of the user will be the avarage of $a$ and $b$.

For example, if a user with rating $1$ competes in a contest and gives performance $1000$, his/her new rating will be $500.5$, the average of $1$ and $1000$.

Takahashi's current rating is $R$, and he wants his rating to be exactly $G$ after the next contest.<br>
Find the performance required to achieve it.  

## Constraints

- $0 \leq R, G \leq 4500$
- All input values are integers.

## Input

Input is given from Standard Input in the following format:

> $R$
> 
> $G$

## Output

Print the performance required to achieve the objective.

```input1
2002
2017
```

```output1
2032
```

Takahashi's current rating is $2002$.<br>
If his performance in the contest is $2032$, his rating will be the average of $2002$ and $2032$, which is equal to the desired rating, $2017$.

```input2
4500
0
```

```output2
-4500
```

Although the current and desired ratings are between $0$ and $4500$, the performance of a user can be below $0$.
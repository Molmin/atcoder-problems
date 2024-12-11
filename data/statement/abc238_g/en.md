Score : $600$ points

## Problem Statement

Given a sequence $A$ of $N$ numbers, answer the following $Q$ questions.

- In the $i$-th question, you are given integers $L_i$ and $R_i$. Is $A_{L_i} \times A_{L_i+1} \times \dots \times A_{R_i}$ a cubic number?

Here, a positive integer $x$ is said to be a cubic number when there is a positive integer $y$ such that $x=y^3$.

## Constraints

- All values in input are integers.
- $1 \le N,Q \le 2 \times 10^5$
- $1 \le A_i \le 10^6$
- $1 \le L_i \le R_i \le N$

## Input

Input is given from Standard Input in the following format:

> $N$ $Q$
> 
> $A_1$ $A_2$ $\dots$ $A_N$
> 
> $L_1$ $R_1$
> 
> $L_2$ $R_2$
> 
> $\vdots$
> 
> $L_Q$ $R_Q$

## Output

Print $Q$ lines.<br>
The $i$-th line should contain `Yes` if, in the $i$-th question, $A_{L_i} \times A_{L_i+1} \times \dots \times A_{R_i}$ is a cubic number, and `No` otherwise.<br>
The checker is case-insensitive; output can be either uppercase or lowercase.

```input1
8 5
7 49 30 1 15 8 6 10
1 2
2 3
4 4
5 8
3 8
```

```output1
Yes
No
Yes
No
Yes
```

- For the first question, $7 \times 49 = 343$ is a cubic number.
- For the second question, $49 \times 30 = 1470$ is not a cubic number.
- For the third question, $1$ is a cubic number.
- For the fourth question, $15 \times 8 \times 6 \times 10 = 7200$  is not a cubic number.
- For the fifth question, $30 \times 1 \times 15 \times 8 \times 6 \times 10 = 216000$ is a cubic number.
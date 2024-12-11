Score : $600$ points

## Problem Statement

In Republic of AtCoder, $N$ kinds of coins are used: $A_1$-yen, $A_2$-yen, $A_3$-yen, $\dots$, $A_N$-yen coins.<br>
Here, $A_1 = 1$ holds, and for each $i$ such that $1 \le i \lt N$, $A_i \lt A_{i + 1}$ holds and $A_{i + 1}$ is a multiple of $A_i$.  

At some shop in this country, Lunlun the dog bought an $X$-yen product by giving $y\ (\ge X)$ yen to the clerk and receiving the change of $y - X$ yen from the clerk. (The change may have been $0$ yen.)<br>
Here, both Lunlun and the clerk used the minimum number of coins needed to represent those amounts of money.<br>
Additionally, the clerk did not return any kind of coins that Lunlun gave him.  

Given $X$, find the number of possible values for $y$.

## Constraints

- $1 \le N \le 50$
- $1 = A_1 \lt A_2 \lt A_3 \lt \dots \lt A_N \le 10^{15}$
- $A_{i + 1}$ is a multiple of $A_i$. $(1 \le i \lt N)$
- $1 \le X \le 10^{15}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $X$
> 
> $A_1 \hspace{7pt} A_2 \hspace{7pt} A_3 \hspace{5pt} \dots\ \hspace{5pt} A_N$

## Output

Print the number of possible values for $y$.

```input1
3 9
1 5 10
```

```output1
3
```

$y$ can be $9$, $10$, or $14$.<br>
For example, when $y = 14$, Lunlun gives one $10$-yen coin and four $1$-yen coins, and the clerk returns one $5$-yen coin.<br>
Here, the clerk is not returning any kind of coins that Lunlun gives him, satisfying the requirement.  

```input2
5 198
1 5 10 50 100
```

```output2
5
```

$y$ can be $198$, $200$, $203$, $208$, or $248$.  

```input3
4 44
1 4 20 100
```

```output3
4
```

$y$ can be $44$, $60$, $100$, or $104$.  

```input4
9 11837029798
1 942454037 2827362111 19791534777 257289952101 771869856303 3859349281515 30874794252120 216123559764840
```

```output4
21
```
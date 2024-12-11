Score : $500$ points

## Problem Statement

There is a monster with initial stamina $N$.<br>
Takahashi repeatedly attacks the monster while the monster's stamina remains $1$ or greater.

An attack by Takahashi reduces the monster's stamina by $2$ with probability $\frac{P}{100}$
and by $1$ with probability $1-\frac{P}{100}$.

Find the expected value, modulo $998244353$ (see Notes), of the number of attacks before the monster's stamina becomes $0$ or less.  

## Notes

We can prove that the sought expected value is always a finite rational number.  Moreover, under the Constraints of this problem, when the value is represented as $\frac{P}{Q}$ by two coprime integers $P$ and $Q$, we can show that there exists a unique integer $R$ such that $R \times Q \equiv P\pmod{998244353}$ and $0 \leq R \lt 998244353$.  Print such $R$.

## Constraints

- $1 \leq N \leq 2\times 10^5$
- $0 \leq P \leq 100$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $P$

## Output

Find the expected value, modulo $998244353$, of the number of Takahashi's attacks.

```input1
3 10
```

```output1
229596204
```

An attack by Takahashi reduces the monster's stamina
by $2$ with probability $\frac{10}{100}=\frac{1}{10}$
and by $1$ with probability $\frac{100-10}{100}=\frac{9}{10}$.

- The monster's initial stamina is $3$.
- After the first attack, the monster's stamina is $2$ with probability $\frac{9}{10}$ and $1$ with probability $\frac{1}{10}$.
- After the second attack, the monster's stamina is $1$ with probability $\frac{81}{100}$, $0$ with probability $\frac{18}{100}$, and $-1$ with probability $\frac{1}{100}$.  With probability $\frac{18}{100}+\frac{1}{100}=\frac{19}{100}$, the stamina becomes $0$ or less, and Takahashi stops attacking after two attacks.
- If the stamina remains $1$ after two attacks, the monster's stamina always becomes $0$ or less by the third attack, so he stops attacking after three attacks.

Therefore, the expected value is $2\times \frac{19}{100}+3\times\left(1-\frac{19}{100}\right)=\frac{281}{100}$.  Since $229596204 \times 100 \equiv 281\pmod{998244353}$, print $229596204$.

```input2
5 100
```

```output2
3
```

Takahashi's attack always reduces the monster's stamina by $2$.
After the second attack, the stamina remains $5-2\times 2=1$, so the third one is required.

```input3
280 59
```

```output3
567484387
```
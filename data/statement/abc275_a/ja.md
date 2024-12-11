配点 : $100$ 点

## 問題文

AtCoder 村には $N$ 本の橋があり、$i$ 本目（ $i$ は $1$ 以上 $N$ 以下の整数）の橋の高さは $H_i$ です。<br>
ここで、AtCoder 村にある $N$ 本の橋のうち、どの相異なる $2$ 本の橋も高さが異なります。

AtCoder 村で最も高い橋は何本目の橋か出力してください。

## 制約

- $1\leq N \leq 100$
- $1\leq H_i \leq 10^9$
- $H_i$ はすべて異なる
- 入力はすべて整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $H_1$ $H_2$ $\ldots$ $H_N$

## 出力

AtCoder 村で最も高い橋は何本目の橋かを、整数で出力せよ。

```input1
3
50 80 70
```

```output1
2
```

AtCoder 村には $3$ 本の橋があります。<br>
$1,2,3$ 本目の橋の高さはそれぞれ, $50,80,70$ であり、
最も高い橋は $2$ 本目の橋です。<br>
よって、$2$ を出力します。

```input2
1
1000000000
```

```output2
1
```

AtCoder 村に橋が $1$ 本しか存在しないため、$2$ 本目以降の橋は存在せず、最も高い橋は $1$ 本目の橋となります。  

```input3
10
22 75 26 45 72 81 47 29 97 2
```

```output3
9
```

AtCoder 村には $10$ 本の橋があり、それらのうち最も高い橋は $9$ 番目の橋（高さは $97$ ）です。
配点 : $100$ 点

## 問題文

各桁が $1$ 以上 $9$ 以下の整数である $3$ 桁の整数 $N$ が与えられます。 

$N$ の $100$ の位を $a$、$10$ の位を $b$、$1$ の位を $c$ としたとき、$b,c,a$ をこの順に並べた整数と $c,a,b$ をこの順に並べた整数をそれぞれ出力してください。

## 制約

- $N$ は各桁が $1$ 以上 $9$ 以下の整数である $3$ 桁の整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$

## 出力

$b,c,a$ をこの順に並べた整数と $c,a,b$ をこの順に並べた整数をこの順で空白区切りで出力せよ。

```input1
379
```

```output1
793 937
```

$379$ の $100$ の位は $3$、$10$ の位は $7$、$1$ の位は $9$ です。よって、$793$ と $937$ をそれぞれ出力します。

```input2
919
```

```output2
199 991
```

$919$ の $100$ の位は $9$、$10$ の位は $1$、$1$ の位は $9$ です。よって、$199$ と $991$ をそれぞれ出力します。